import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

// CoffeeCup: ใช้ LatheGeometry วาดเส้นโค้งหน้าตัดแล้วหมุนรอบแกน ให้ได้ทรงแก้วมนสมจริง
function CoffeeCup() {
  const groupRef = useRef(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  // จุดหน้าตัดแก้ว (จากฐานขึ้นไปปากแก้ว) - โค้งมนแบบ mug ทรงเตี้ยหน่อย ไม่สูงเพรียวเกิน
  const cupProfile = useMemo(() => {
    return [
      new THREE.Vector2(0, -0.82),
      new THREE.Vector2(0.55, -0.8),
      new THREE.Vector2(0.62, -0.5),
      new THREE.Vector2(0.65, 0),
      new THREE.Vector2(0.66, 0.5),
      new THREE.Vector2(0.7, 0.62),
      new THREE.Vector2(0.65, 0.64),
    ]
  }, [])

  return (
    // scale เล็กลงมาก + วางให้กึ่งกลางของกลุ่มอยู่สูงขึ้นนิดหน่อย ให้ลอยกลางเฟรมพอดี
    <group ref={groupRef} scale={0.46} position={[0, -0.1, 0]}>
      {/* ตัวแก้ว */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[cupProfile, 48]} />
        <meshStandardMaterial color="#fdf6ec" roughness={0.35} metalness={0} />
      </mesh>

      {/* ผิวกาแฟ: สีน้ำตาลเข้มเกือบดำ ให้ความรู้สึกของเหลวมันวาว */}
      <mesh position={[0, 0.605, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.63, 48]} />
        <meshStandardMaterial color="#3b2412" roughness={0.1} metalness={0} />
      </mesh>

      {/* โฟมสีครีมขอบบาง ๆ รอบผิวกาแฟ */}
      <mesh position={[0, 0.608, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.6, 0.64, 48]} />
        <meshStandardMaterial color="#d9a768" roughness={0.5} metalness={0} />
      </mesh>

      {/* หูจับ: ใช้ torus เต็มวง (ไม่มีช่องว่าง/รอยแหว่งเลย) ฝั่งในของวงจะจมอยู่ในลำตัวแก้ว
          ส่วนฝั่งนอกยื่นออกมาให้เห็นเป็นห่วงหูจับชัดเจน */}
      <mesh position={[0.68, -0.02, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.24, 0.065, 16, 32]} />
        <meshStandardMaterial color="#fdf6ec" roughness={0.35} metalness={0} />
      </mesh>

      {/* จานรอง */}
      <mesh position={[0, -0.9, 0]} receiveShadow>
        <cylinderGeometry args={[1.05, 1.1, 0.06, 48]} />
        <meshStandardMaterial color="#fdf6ec" roughness={0.35} metalness={0} />
      </mesh>

      {/* ไอน้ำ: เส้นโค้งบางโปร่งแสงลอยขึ้น */}
      {[-0.22, 0, 0.22].map((x, i) => (
        <mesh key={i} position={[x, 1.1 + i * 0.08, 0]} rotation={[0, 0, (i - 1) * 0.25]}>
          <capsuleGeometry args={[0.035, 0.35, 4, 8]} />
          <meshStandardMaterial color="white" transparent opacity={0.22 - i * 0.03} depthWrite={false} />
        </mesh>
      ))}
    </group>
  )
}

function Coffee3D() {
  return (
    <Canvas
      camera={{ position: [1.6, 0.9, 4.2], fov: 32 }}
      className="!absolute inset-0"
      shadows
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[3, 5, 3]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-2.5, 1, 1.5]} intensity={0.6} color="#ffb366" />
        {/* rim light: แสงจากด้านหลังเบา ๆ ทำให้ขอบวัตถุมีเส้นสว่างไฮไลต์ ดูมีมิติขึ้น */}
        <pointLight position={[-1, 1.5, -2]} intensity={1} color="#ffd9a0" />

        <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.4}>
          <CoffeeCup />
        </Float>

        {/* ContactShadows: เงานุ่ม ๆ ใต้วัตถุ */}
        <ContactShadows position={[0, -0.97, 0]} opacity={0.45} scale={3.5} blur={2.2} far={1.5} />
      </Suspense>
    </Canvas>
  )
}

export default Coffee3D
