export function Desk({ roomNodes, bakedTexture }) {
  return (
    <mesh geometry={roomNodes.desk.geometry} position={[-0.01, 1.4, -1.104]}>
      <meshBasicMaterial map={bakedTexture} />
    </mesh>
  )
}
