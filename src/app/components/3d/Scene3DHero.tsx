import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

function TorusKnot() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={mesh} position={[2.5, 0.5, -1]}>
        <torusKnotGeometry args={[0.9, 0.28, 200, 32]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#4C1D95"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          distort={0.25}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function IcosahedronShape() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.4;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={mesh} position={[3.5, -1.2, -0.5]}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#0284C7"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function OctahedronShape() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={2}>
      <mesh ref={mesh} position={[1.8, 1.8, -1.5]}>
        <octahedronGeometry args={[0.35]} />
        <meshStandardMaterial
          color="#F59E0B"
          emissive="#D97706"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function RingShape() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.PI / 2 + state.clock.elapsedTime * 0.15;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.25;
  });
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={mesh} position={[4, 0.8, -2]}>
        <torusGeometry args={[0.7, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#A78BFA"
          emissive="#7C3AED"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

function SmallSpheres() {
  const positions: [number, number, number][] = [
    [1.2, -1.5, -0.5],
    [4.5, -0.5, -1.5],
    [2.2, 2.2, -2],
    [3.0, -2.0, -1],
  ];
  const colors = ["#7C3AED", "#06B6D4", "#10B981", "#F59E0B"];
  return (
    <>
      {positions.map((pos, i) => (
        <Float key={i} speed={2 + i * 0.5} floatIntensity={1.5}>
          <mesh position={pos}>
            <sphereGeometry args={[0.1 + i * 0.03, 16, 16]} />
            <meshStandardMaterial
              color={colors[i % colors.length]}
              emissive={colors[i % colors.length]}
              emissiveIntensity={0.8}
              metalness={1}
              roughness={0}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function Scene3DHero() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "55%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
      className="hidden lg:block"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[-3, 3, 3]} intensity={2} color="#7C3AED" />
          <pointLight position={[3, -3, 2]} intensity={1.5} color="#06B6D4" />
          <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />
          <Stars radius={80} depth={50} count={300} factor={3} fade speed={1} />
          <TorusKnot />
          <IcosahedronShape />
          <OctahedronShape />
          <RingShape />
          <SmallSpheres />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
