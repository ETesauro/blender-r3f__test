import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'

function useViewport() {
  const { viewport } = useThree()

  return useMemo(() => {
    return {
      width: viewport.width,
      height: viewport.height,
      aspect: viewport.width / viewport.height
    }
  }, [viewport.width, viewport.height])
}

export { useViewport }
