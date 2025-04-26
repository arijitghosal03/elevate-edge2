import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Abstract3D = ({ scrollProgress, mousePosition }) => {
  const group = useRef();
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const mouseMoveTimeout = useRef(null);
  const avatarInstances = useRef([]);
  
  // Load the avatar model
  const { scene: avatarScene } = useGLTF('/models/avatar.glb');
  
  // Create positions for avatar instances
  useEffect(() => {
    avatarInstances.current = Array(8).fill().map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      ),
      scale: 0.3 + Math.random() * 0.4,
      hover: 0,
      rotation: new THREE.Euler(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      ),
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      }
    }));
  }, []);

  // Handle mouse movement detection
  useEffect(() => {
    const handleMouseMove = () => {
      setIsMouseMoving(true);
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }
      mouseMoveTimeout.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }
    };
  }, []);

  useFrame((state) => {
    if (!group.current || !avatarInstances.current.length) return;

    // Mouse-based interaction with hover effects
    if (mousePosition?.current) {
      avatarInstances.current.forEach((instance) => {
        // Calculate distance from mouse
        const mouseVec = new THREE.Vector2(
          mousePosition.current.x * 2,
          mousePosition.current.y * 2
        );
        const instancePos = new THREE.Vector3().copy(instance.position);
        instancePos.project(state.camera);
        const instanceVec = new THREE.Vector2(instancePos.x, instancePos.y);
        const distance = mouseVec.distanceTo(instanceVec);

        // Enhanced hover effect with smoother transition
        instance.hover = THREE.MathUtils.lerp(
          instance.hover,
          distance < 0.3 ? 1 : 0,
          0.1
        );
      });
    }

    // Enhanced floating animation and rotation for avatars
    avatarInstances.current.forEach((instance, i) => {
      // Vertical floating
      instance.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.005;
      
      // Horizontal floating
      instance.position.x += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.003;
      
      // Depth floating
      instance.position.z += Math.sin(state.clock.elapsedTime * 0.4 + i) * 0.002;
      
      // Apply rotation based on hover state
      instance.rotation.x += instance.rotationSpeed.x * (1 + instance.hover * 2);
      instance.rotation.y += instance.rotationSpeed.y * (1 + instance.hover * 2);
      instance.rotation.z += instance.rotationSpeed.z * (1 + instance.hover * 0.5);
      
      // Scale pulsing based on hover
      instance.currentScale = instance.scale * (1 + instance.hover * 0.2 + Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.05);
    });
  });

  return (
    <group ref={group}>
      {/* Enhanced lighting for 3D avatars */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" castShadow />
      <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" distance={15} decay={2} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.6}
        penumbra={0.8}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />

      {/* Render all avatar instances */}
      {avatarInstances.current.map((instance, i) => (
        <group 
          key={i} 
          position={instance.position}
          rotation={[instance.rotation.x, instance.rotation.y, instance.rotation.z]}
          scale={[instance.currentScale || instance.scale, instance.currentScale || instance.scale, instance.currentScale || instance.scale]}
        >
          {/* Clone the avatar model for each instance */}
          <primitive 
            object={avatarScene.clone()} 
            dispose={null}
          />
          
          {/* Add glow effect for hovered avatars */}
          {instance.hover > 0.3 && (
            <pointLight
              position={[0, 0, 0]}
              color="#4fc3f7"
              intensity={instance.hover * 2}
              distance={3}
              decay={2}
            />
          )}
        </group>
      ))}
    </group>
  );
};

// Preload the avatar model
useGLTF.preload('/models/avatar.glb');

export default Abstract3D;