export default function Desk({ roomNodes, bakedTexture }) {
  return (
    <mesh name='desk' geometry={roomNodes.desk.geometry} position={[-0.436, 1.492, -0.863]} rotation={[0, 0.172, 0]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
