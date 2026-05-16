import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      color: ["#7C3AED", "#06B6D4", "#F59E0B", "#10B981", "#EF4444"][i % 5],
      size: 0.06 + Math.random() * 0.1,
      speed: 0.5 + Math.random(),
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={node.speed} floatIntensity={0.5}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.size, 12, 12]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.9}
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function PulsingRings() {
  const rings = [
    { position: [-3, 1, -3] as [number, number, number], color: "#7C3AED", scale: 2 },
    { position: [3, -1, -4] as [number, number, number], color: "#06B6D4", scale: 1.5 },
  ];
  return (
    <>
      {rings.map((r, i) => {
        const mesh = useRef<THREE.Mesh>(null);
        useFrame((state) => {
          if (!mesh.current) return;
          const s = r.scale + Math.sin(state.clock.elapsedTime * 0.8 + i) * 0.15;
          mesh.current.scale.set(s, s, s);
          mesh.current.rotation.x = state.clock.elapsedTime * 0.1 + i;
          mesh.current.rotation.z = state.clock.elapsedTime * 0.15;
        });
        return (
          <mesh ref={mesh} key={i} position={r.position}>
            <torusGeometry args={[1, 0.02, 8, 60]} />
            <meshStandardMaterial
              color={r.color}
              emissive={r.color}
              emissiveIntensity={0.6}
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}
    </>
  );
}

export function Scene3DServices() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 5]} intensity={1} color="#7C3AED" />
          <pointLight position={[5, 5, 3]} intensity={0.8} color="#06B6D4" />
          <NetworkNodes />
          <PulsingRings />
        </Suspense>
      </Canvas>
    </div>
  );
}
