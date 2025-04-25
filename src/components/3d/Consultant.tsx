import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Consultant = ({ scrollProgress }) => {
  const group = useRef();
  const { scene } = useGLTF('/models/consultant.glb');

  // Camera positions for different sections
  const cameraPositions = [
    new THREE.Vector3(0, 1.6, 3), // Initial
    new THREE.Vector3(-2, 1.2, 4), // Services
    new THREE.Vector3(2, 1.8, 3.5), // Portfolio
    new THREE.Vector3(0, 1.4, 2.5), // Contact
  ];

  useFrame((state) => {
    if (!group.current) return;

    // Calculate which section we're in based on scroll progress
    const section = Math.floor(scrollProgress * (cameraPositions.length - 1));
    const sectionProgress = (scrollProgress * (cameraPositions.length - 1)) % 1;

    // Interpolate between camera positions
    const currentPos = cameraPositions[section];
    const nextPos = cameraPositions[Math.min(section + 1, cameraPositions.length - 1)];
    
    state.camera.position.lerp(
      new THREE.Vector3().lerpVectors(currentPos, nextPos, sectionProgress),
      0.1
    );

    // Look at the consultant
    state.camera.lookAt(0, 1, 0);

    // Gentle rotation of the consultant
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Consultant;

useGLTF.preload('/models/consultant.glb');