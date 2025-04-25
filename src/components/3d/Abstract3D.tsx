import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Abstract3D = ({ scrollProgress, mousePosition }) => {
  const group = useRef();
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const mouseMoveTimeout = useRef(null);
  const logoElements = useRef([]);

  // Create positions for logo elements
  useEffect(() => {
    logoElements.current = Array(10).fill().map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      ),
      scale: 0.5 + Math.random() * 0.5,
      hover: 0,
      rotation: 0
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
    if (!group.current || !logoElements.current.length) return;

    // Mouse-based rotation with hover effects
    if (mousePosition?.current) {
      logoElements.current.forEach((element, i) => {
        // Calculate distance from mouse
        const mouseVec = new THREE.Vector2(
          mousePosition.current.x * 2,
          mousePosition.current.y * 2
        );
        const elementPos = new THREE.Vector3().copy(element.position);
        elementPos.project(state.camera);
        const elementVec = new THREE.Vector2(elementPos.x, elementPos.y);
        const distance = mouseVec.distanceTo(elementVec);

        // Enhanced hover effect with smoother transition
        element.hover = THREE.MathUtils.lerp(
          element.hover,
          distance < 0.3 ? 1 : 0,
          0.1
        );

        // Add rotation based on hover
        element.rotation += 0.01 * (1 + element.hover * 0.5);
      });
    }

    // Enhanced floating animation
    logoElements.current.forEach((element, i) => {
      // Vertical floating
      element.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;
      
      // Horizontal floating
      element.position.x += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.001;
      
      // Depth floating
      element.position.z += Math.sin(state.clock.elapsedTime * 0.4 + i) * 0.001;
      
      // Scale pulsing
      element.scale = 0.5 + Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.1;
    });
  });

  // Render Elevate Edge logo elements
  const renderLogoElement = (type, hover, position, scale) => {
    const hoverScale = 1 + hover * 0.3;
    const rotation = hover * Math.PI * 2; // Full rotation on hover
    
    // Color palette for the logo
    const colors = {
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#f5f5f5"
    };
    
    switch(type) {
      case 0: // Letter E (first E in Elevate)
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh scale={[hoverScale * 0.3, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            {[0, 0.5, 1].map((y, i) => (
              <mesh key={i} position={[0.2, -0.5 + y, 0]} scale={[hoverScale * 0.5, hoverScale * 0.1, hoverScale * 0.15]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={colors.secondary} metalness={0.9} roughness={0.1} />
              </mesh>
            ))}
          </group>
        );
      case 1: // Letter L
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh position={[-0.2, 0, 0]} scale={[hoverScale * 0.1, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.5, 0]} scale={[hoverScale * 0.5, hoverScale * 0.1, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      case 2: // Letter E (second E in Elevate)
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh scale={[hoverScale * 0.3, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            {[0, 0.5, 1].map((y, i) => (
              <mesh key={i} position={[0.2, -0.5 + y, 0]} scale={[hoverScale * 0.5, hoverScale * 0.1, hoverScale * 0.15]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={colors.secondary} metalness={0.9} roughness={0.1} />
              </mesh>
            ))}
          </group>
        );
      case 3: // Letter V
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh rotation={[0, 0, Math.PI/8]} position={[-0.1, 0, 0]} scale={[hoverScale * 0.1, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh rotation={[0, 0, -Math.PI/8]} position={[0.1, 0, 0]} scale={[hoverScale * 0.1, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      case 4: // Letter A
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh rotation={[0, 0, Math.PI/8]} position={[-0.1, 0, 0]} scale={[hoverScale * 0.1, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh rotation={[0, 0, -Math.PI/8]} position={[0.1, 0, 0]} scale={[hoverScale * 0.1, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]} scale={[hoverScale * 0.5, hoverScale * 0.1, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      case 5: // Letter T
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh position={[0, 0, 0]} scale={[hoverScale * 0.1, hoverScale, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.5, 0]} scale={[hoverScale * 0.6, hoverScale * 0.1, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.primary} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      case 6: // Letter E (in EDGE)
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh scale={[hoverScale * 0.3, hoverScale * 0.7, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.secondary} metalness={0.8} roughness={0.2} />
            </mesh>
            {[0, 0.5, 1].map((y, i) => (
              <mesh key={i} position={[0.2, -0.35 + y * 0.7, 0]} scale={[hoverScale * 0.4, hoverScale * 0.1, hoverScale * 0.15]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={colors.primary} metalness={0.9} roughness={0.1} />
              </mesh>
            ))}
          </group>
        );
      case 7: // Letter D
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh position={[-0.2, 0, 0]} scale={[hoverScale * 0.1, hoverScale * 0.7, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.secondary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]} scale={[hoverScale * 0.5, hoverScale * 0.7, hoverScale * 0.1]}>
              <cylinderGeometry args={[0.5, 0.5, 1, 16, 1, false, 0, Math.PI]} />
              <meshStandardMaterial color={colors.secondary} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      case 8: // Letter G
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[0, rotation, 0]}>
            <mesh scale={[hoverScale, hoverScale, hoverScale]}>
              <torusGeometry args={[0.3, 0.1, 16, 16, 5 * Math.PI / 3]} />
              <meshStandardMaterial color={colors.secondary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.1, -0.1, 0]} scale={[hoverScale * 0.3, hoverScale * 0.1, hoverScale * 0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={colors.secondary} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      case 9: // Cube that transforms into logo
        return (
          <group position={position} scale={[scale, scale, scale]} rotation={[rotation, rotation, 0]}>
            {hover < 0.5 ? (
              // Regular cube when not hovered
              <mesh scale={[hoverScale, hoverScale, hoverScale]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial 
                  color={colors.primary}
                  metalness={0.8} 
                  roughness={0.2}
                  wireframe={hover > 0.2}
                />
              </mesh>
            ) : (
              // Transform into logo shape when hovered
              <group>
                <mesh position={[-0.4, 0, 0]} scale={[hoverScale * 0.1, hoverScale * 0.6, hoverScale * 0.1]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color={colors.primary} metalness={0.9} roughness={0.1} />
                </mesh>
                <mesh position={[0, 0, 0]} scale={[hoverScale * 0.6, hoverScale * 0.1, hoverScale * 0.1]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color={colors.primary} metalness={0.9} roughness={0.1} />
                </mesh>
                <mesh position={[0.4, 0, 0]} scale={[hoverScale * 0.1, hoverScale * 0.6, hoverScale * 0.1]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color={colors.primary} metalness={0.9} roughness={0.1} />
                </mesh>
              </group>
            )}
            {/* Particles that emerge on hover */}
            {hover > 0.3 && Array(8).fill().map((_, i) => (
              <mesh 
                key={i}
                position={[
                  Math.sin(i * Math.PI / 4) * (0.8 + hover * 0.5), 
                  Math.cos(i * Math.PI / 4) * (0.8 + hover * 0.5),
                  0
                ]}
                scale={hoverScale * 0.1}
              >
                <sphereGeometry args={[1, 8, 8]} />
                <meshStandardMaterial 
                  color={i % 2 === 0 ? colors.primary : colors.secondary} 
                  emissive={colors.accent}
                  emissiveIntensity={hover}
                />
              </mesh>
            ))}
          </group>
        );
      default:
        return null;
    }
  };

  return (
    <group ref={group}>
      {/* Enhanced lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" distance={10} decay={2} />
      <spotLight
        position={[0, 5, 0]}
        angle={0.5}
        penumbra={0.5}
        intensity={0.5}
        color="#ffffff"
        castShadow
      />

      {/* Render all logo elements */}
      {logoElements.current.map((element, i) => (
        <group 
          key={i} 
          position={element.position}
          rotation={[0, element.rotation || 0, 0]}
        >
          {renderLogoElement(i % 10, element.hover, [0, 0, 0], element.scale)}
        </group>
      ))}
    </group>
  );
};

export default Abstract3D;