import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function EnergyOrb() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
  });
  return (
    <Float speed={2} floatIntensity={2} rotationIntensity={0.5}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#4C1D95"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
          distort={0.5}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

function OrbitRings() {
  const rings = [
    { radius: 2.2, speed: 0.4, tilt: 0.5, color: "#7C3AED" },
    { radius: 2.8, speed: -0.3, tilt: 1.2, color: "#06B6D4" },
    { radius: 3.3, speed: 0.2, tilt: 0.8, color: "#F59E0B" },
  ];

  return (
    <>
      {rings.map((ring, i) => {
        const ref = useRef<THREE.Mesh>(null);
        useFrame((state) => {
          if (!ref.current) return;
          ref.current.rotation.z = state.clock.elapsedTime * ring.speed;
          ref.current.rotation.x = ring.tilt;
        });
        return (
          <mesh ref={ref} key={i}>
            <torusGeometry args={[ring.radius, 0.03, 8, 120]} />
            <meshStandardMaterial
              color={ring.color}
              emissive={ring.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </>
  );
}

function ParticleOrbiters() {
  const particles: { ref: React.RefObject<THREE.Mesh | null>; angle: number; radius: number; speed: number; color: string; }[] = Array.from({ length: 12 }, (_, i) => ({
    ref: useRef<THREE.Mesh>(null),
    angle: (i / 12) * Math.PI * 2,
    radius: 2.2 + (i % 3) * 0.6,
    speed: 0.3 + i * 0.05,
    color: ["#7C3AED", "#06B6D4", "#F59E0B", "#10B981"][i % 4],
  }));

  useFrame((state) => {
    particles.forEach((p) => {
      if (!p.ref.current) return;
      const angle = p.angle + state.clock.elapsedTime * p.speed;
      p.ref.current.position.x = Math.cos(angle) * p.radius;
      p.ref.current.position.y = Math.sin(angle) * p.radius * 0.3;
      p.ref.current.position.z = Math.sin(angle) * p.radius * 0.5;
    });
  });

  return (
    <>
      {particles.map((p, i) => (
        <mesh ref={p.ref} key={i}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </>
  );
}

export function Scene3DCTA() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 5]} intensity={3} color="#7C3AED" />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#06B6D4" />
          <pointLight position={[-5, -5, 3]} intensity={1} color="#F59E0B" />
          <Stars radius={60} depth={30} count={150} factor={2} fade speed={0.5} />
          <EnergyOrb />
          <OrbitRings />
          <ParticleOrbiters />
        </Suspense>
      </Canvas>
    </div>
  );
}
