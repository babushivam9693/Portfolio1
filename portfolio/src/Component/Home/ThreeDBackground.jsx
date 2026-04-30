import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei";

function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#465697"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function RotatingBox() {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
      <Box ref={meshRef} args={[0.5, 0.5, 0.5]} position={[2, 1, 0]}>
        <meshStandardMaterial
          color="#7c3aed"
          roughness={0.3}
          metalness={0.9}
          wireframe
        />
      </Box>
    </Float>
  );
}

function RotatingTorus() {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2.2}>
      <Torus ref={meshRef} args={[0.6, 0.2, 16, 32]} position={[-2, -1, 0]}>
        <meshStandardMaterial
          color="#06b6d4"
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#465697" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
      <AnimatedSphere />
      <RotatingBox />
      <RotatingTorus />
    </>
  );
}

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
