"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function RotatingBox() {
  const mesh = useRef(null)
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.5
      mesh.current.rotation.y += delta * 0.3
    }
  })
  return (
    <mesh ref={mesh} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0ff" emissive="#0ff" emissiveIntensity={0.5} metalness={0.2} roughness={0.1} />
    </mesh>
  )
}

export function ThreeDScene() {
  return (
    <Canvas className="w-full h-full" camera={{ position: [2, 2, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingBox />
      <OrbitControls enableZoom={false} enablePan={false} />
      {/* Optional label overlay */}
      <Html center>
        <div className="text-white text-sm uppercase tracking-widest" style={{ textShadow: "0 0 8px #0ff" }}>AI Growth OS</div>
      </Html>
    </Canvas>
  )
}
