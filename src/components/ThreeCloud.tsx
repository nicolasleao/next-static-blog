"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

// Use ErrorBoundary to prevent entire app from crashing if Three.js fails
function ErrorFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-pastel-dark rounded-xl">
      <p className="text-pastel-primary">Could not load 3D visualization</p>
    </div>
  );
}

function Cloud() {
  const pointsRef = useRef<THREE.Group>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  
  // Generate random points on a sphere
  const points = useMemo(() => {
    return Array.from({ length: 120 }, () => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 22 + Math.random() * 8;
      return {
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ],
        scale: 0.25 + Math.random() * 0.5,
        speed: 0.15 + Math.random() * 0.3,
      };
    });
  }, []);

  // Animate cloud points
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const group = pointsRef.current;
    const time = state.clock.getElapsedTime();
    
    // Subtle group rotation
    group.rotation.y = Math.sin(time * 0.05) * 0.1;
    
    // Animate individual points
    group.children.forEach((child, i) => {
      const { speed } = points[i];
      child.position.y += Math.sin(time * speed) * 0.01;
      child.rotation.x = time * 0.2;
      child.rotation.z = time * 0.2;
      
      // Make hovered point pulse
      if (hoveredPoint === i) {
        child.scale.setScalar(1.0 + Math.sin(time * 2) * 0.2);
      }
    });
  });

  // Handle point hover
  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>, index: number) => {
    e.stopPropagation();
    setHoveredPoint(index);
    document.body.style.cursor = "pointer";
  }, []);

  const handlePointerOut = useCallback(() => {
    setHoveredPoint(null);
    document.body.style.cursor = "auto";
  }, []);

  return (
    <group ref={pointsRef}>
      {points.map(({ position, scale }, i) => (
        <mesh 
          key={i} 
          position={position as [number, number, number]} 
          scale={scale}
          onPointerOver={(e) => handlePointerOver(e, i)}
          onPointerOut={handlePointerOut}
        >
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshStandardMaterial 
            color={hoveredPoint === i ? "#C6D99F" : "#88A773"} 
            emissive="#5A6858" 
            emissiveIntensity={hoveredPoint === i ? 1.0 : 0.6}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}
    </group>
  );
}

// Add connection lines between points
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  // Create lines geometry for connections
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const linePositions: number[] = [];
    
    // Create 40 random connections
    for (let i = 0; i < 40; i++) {
      const phi1 = Math.acos(2 * Math.random() - 1);
      const theta1 = 2 * Math.PI * Math.random();
      const r1 = 22 + Math.random() * 8;
      
      const phi2 = Math.acos(2 * Math.random() - 1);
      const theta2 = 2 * Math.PI * Math.random();
      const r2 = 22 + Math.random() * 8;
      
      const x1 = r1 * Math.sin(phi1) * Math.cos(theta1);
      const y1 = r1 * Math.sin(phi1) * Math.sin(theta1);
      const z1 = r1 * Math.cos(phi1);
      
      const x2 = r2 * Math.sin(phi2) * Math.cos(theta2);
      const y2 = r2 * Math.sin(phi2) * Math.sin(theta2);
      const z2 = r2 * Math.cos(phi2);
      
      points.push(new THREE.Vector3(x1, y1, z1));
      points.push(new THREE.Vector3(x2, y2, z2));
      
      linePositions.push(x1, y1, z1, x2, y2, z2);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    return geometry;
  }, []);

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial attach="material" color="#5A6858" opacity={0.3} transparent />
    </lineSegments>
  );
}

const cloudFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function ThreeCloud() {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Prevent hydration errors by only rendering ThreeJS on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Trigger loaded state after a short delay to ensure everything is rendered
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100); // Small delay to ensure Canvas is mounted
      return () => clearTimeout(timer);
    }
  }, [isClient]);
  
  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <div className="opacity-0"></div>
      </div>
    );
  }
  
  try {
    return (
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            className="w-full h-full"
            variants={cloudFadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <Canvas 
              camera={{ position: [0, 0, 55], fov: 60 }} 
              style={{ width: "100%", height: "100%" }}
              gl={{ alpha: true, antialias: true }}
            >
              <ambientLight intensity={0.4} />
              <pointLight position={[20, 20, 20]} intensity={0.8} color="#88A773" />
              <pointLight position={[-20, -20, -20]} intensity={0.4} color="#C6D99F" />
              <fog attach="fog" args={['#171A19', 50, 120]} />
              <Cloud />
              <ConnectionLines />
              <OrbitControls 
                enablePan={false} 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.5} 
                minPolarAngle={Math.PI / 2 - 0.5} 
                maxPolarAngle={Math.PI / 2 + 0.5}
              />
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>
    );
  } catch (error) {
    console.error('Error rendering ThreeCloud:', error);
    return <ErrorFallback />;
  }
} 