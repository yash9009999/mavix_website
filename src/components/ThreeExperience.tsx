'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Floating Sphere Component
function FloatingSphere({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01
      meshRef.current.rotation.y += speed * 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// Particle System Component
function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.rotation.x += 0.0005
    }
  })

  const particlesCount = 100
  const positions = new Float32Array(particlesCount * 3)
  
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#3FA9FF" size={0.02} transparent opacity={0.8} />
    </points>
  )
}

// Interactive Cube Component
function InteractiveCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      const scale = hovered ? 1.2 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? "#3FA9FF" : "#1E6BFF"} 
        emissive={hovered ? "#3FA9FF" : "#1E6BFF"}
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  )
}

const ThreeExperience = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="text-2xl font-bold text-blue-400 animate-pulse">Loading 3D Experience...</div>
      </div>
    )
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3FA9FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1E6BFF" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.8} color="#3FA9FF" />
          
          {/* 3D Objects */}
          <FloatingSphere position={[-2, 1, 0]} color="#1E6BFF" speed={1} />
          <FloatingSphere position={[2, -1, 0]} color="#3FA9FF" speed={1.5} />
          <FloatingSphere position={[0, 2, -2]} color="#6366F1" speed={0.8} />
          <InteractiveCube />
          <ParticleSystem />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Glass Card */}
          <div className="glass p-12 rounded-3xl border border-white/10 backdrop-blur-md">
            <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              We Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Intelligent Digital
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Experiences
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-inter">
              Immerse yourself in the future of digital innovation. 
              Our cutting-edge 3D experiences represent our commitment to 
              pushing boundaries and creating solutions that captivate and inspire.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                className="glass px-6 py-3 rounded-full border border-blue-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-blue-400 font-semibold">Interactive Design</span>
              </motion.div>
              <motion.div
                className="glass px-6 py-3 rounded-full border border-cyan-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-cyan-400 font-semibold">3D Visualization</span>
              </motion.div>
              <motion.div
                className="glass px-6 py-3 rounded-full border border-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-purple-400 font-semibold">Future Technology</span>
              </motion.div>
            </div>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary mt-8 text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  )
}

export default ThreeExperience
