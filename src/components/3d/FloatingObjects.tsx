import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const SphereParticle = ({ position, scale, color, speed, index }) => {
  const mesh = useRef(null);
  const initialPosition = useRef(new THREE.Vector3(...position));
  const targetPosition = useRef(new THREE.Vector3(
    position[0] + (Math.random() * 4 - 2),
    position[1] + (Math.random() * 4 - 2),
    position[2] + (Math.random() * 2 - 1)
  ));
  
  const rotationSpeed = useRef({
    x: speed * (Math.random() > 0.5 ? 1 : -1),
    y: speed * 0.7 * (Math.random() > 0.5 ? 1 : -1),
    z: speed * 0.3 * (Math.random() > 0.5 ? 1 : -1)
  });

  // Create a gentle floating movement pattern
  useFrame((state, delta) => {
    if (!mesh.current) return;

    // Gentle rotation
    mesh.current.rotation.x += delta * rotationSpeed.current.x;
    mesh.current.rotation.y += delta * rotationSpeed.current.y;
    mesh.current.rotation.z += delta * rotationSpeed.current.z * 0.5;
    
    // Check if close to target
    const distanceToTarget = mesh.current.position.distanceTo(targetPosition.current);
    
    if (distanceToTarget < 0.1) {
      // Set new random target position when close to current target
      targetPosition.current.set(
        initialPosition.current.x + (Math.random() * 4 - 2),
        initialPosition.current.y + (Math.random() * 4 - 2),
        initialPosition.current.z + (Math.random() * 2 - 1)
      );
    }
    
    // Move towards target position
    const lerpFactor = 0.005 + (index * 0.0005); // Different speed for each sphere
    mesh.current.position.lerp(targetPosition.current, lerpFactor);
  });

  return (
    <motion.group
      ref={mesh}
      initial={{ 
        scale: 0,
        position: [position[0], position[1], position[2] - 5] 
      }}
      animate={{ 
        scale, 
        position: position
      }}
      transition={{ 
        scale: {
          duration: 1.5, 
          delay: index * 0.1,
          ease: [0.34, 1.56, 0.64, 1]
        },
        position: {
          duration: 2,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
    >
      <Float 
        speed={1} 
        rotationIntensity={0.2} 
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <mesh castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            roughness={0.4} 
            metalness={0.3}
            emissive={color}
            emissiveIntensity={0.3}
            envMapIntensity={1.2}
          />
        </mesh>
      </Float>
    </motion.group>
  );
};

// Scene setup component
const Scene = () => {
  // Define spheres with their properties
  const particles = [
    { position: [3, 1, 0], scale: 0.6, color: "#FF2E2E", speed: 0.4 },
    { position: [-2.5, 2, -2], scale: 0.8, color: "#FFFFFF", speed: 0.3 },
    { position: [0, -1.5, -1], scale: 0.5, color: "#FF2E2E", speed: 0.5 },
    { position: [-4, -0.5, -3], scale: 0.7, color: "#FFFFFF", speed: 0.2 },
    { position: [2, -2, -2], scale: 0.4, color: "#FFFFFF", speed: 0.35 },
    { position: [4, 0, -4], scale: 0.6, color: "#FF5C5C", speed: 0.25 },
    { position: [1.5, 3, -3], scale: 0.5, color: "#FF2E2E", speed: 0.45 },
    { position: [-3, -2, -1], scale: 0.7, color: "#FFAAAA", speed: 0.3 },
    { position: [0, 0, -2], scale: 0.3, color: "#FF8888", speed: 0.5 },
    { position: [-1, 3, -1], scale: 0.4, color: "#FFCCCC", speed: 0.4 },
    { position: [3, -3, -2], scale: 0.5, color: "#FFFFFF", speed: 0.3 },
    { position: [-2, -1, -3], scale: 0.6, color: "#FF2E2E", speed: 0.35 },
    { position: [2, 2, -1], scale: 0.4, color: "#FFAAAA", speed: 0.45 },
    { position: [-4, 1, -2], scale: 0.3, color: "#FFFFFF", speed: 0.5 },
  ];

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <spotLight position={[-10, -10, -5]} intensity={0.5} color="#FF5C5C" />
      
      {particles.map((particle, index) => (
        <SphereParticle 
          key={index} 
          position={particle.position} 
          scale={particle.scale} 
          color={particle.color} 
          speed={particle.speed}
          index={index}
        />
      ))}
    </>
  );
};

// Main exported component
const FloatingObjects = ({ className = '' }) => {
  return (
    <div 
      className={`canvas-container ${className}`}
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
    >
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingObjects;