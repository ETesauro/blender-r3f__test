import { useState, useEffect } from 'react'

const useDebugMode = () => {
  const [isDebug, setIsDebug] = useState(window.location.hash === '#debug')

  useEffect(() => {
    const checkHash = () => {
      setIsDebug(window.location.hash === '#debug')
    }

    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  return isDebug
}

export { useDebugMode }
