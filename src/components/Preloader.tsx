import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

const StarField = () => {
  const ref = useRef<THREE.Points>(null);

  // Memoize star positions for better performance
  const positions = useMemo(
    () => new Float32Array(random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }) as Float32Array),
    []
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#8b5cf6" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null);
  const numPoints = 50;
  const radius = 0.3;
  const height = 2;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const generateStrand = (offset: number) =>
    useMemo(
      () =>
        Array.from({ length: numPoints }, (_, i) => {
          const angle = (i / numPoints) * Math.PI * 4 + offset;
          const y = (i / numPoints) * height - height / 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return new THREE.Vector3(x, y, z);
        }),
      []
    );

  const strand1Points = generateStrand(0);
  const strand2Points = generateStrand(Math.PI);

  return (
    <group ref={groupRef}>
      {[strand1Points, strand2Points].map((strand, index) => (
        <mesh key={`strand-${index}`}>
          <tubeGeometry args={[new THREE.CatmullRomCurve3(strand), 100, 0.02, 8]} />
          <meshStandardMaterial color="#6d28d9" emissive="#6d28d9" emissiveIntensity={0.5} />
        </mesh>
      ))}
      {[...strand1Points, ...strand2Points].map((point, i) => (
        <mesh key={`base-${i}`} position={point.toArray()}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  );
};

const Preloader = () => {
  return (
    <motion.div className="canvas-container" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <StarField />
        <DNAHelix />
      </Canvas>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-2">Initializing</h2>
        <p className="text-muted-foreground">Analyzing data structures...</p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
