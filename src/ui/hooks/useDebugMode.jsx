import { useState, useEffect } from 'react'

function useDebugMode(hashKey = '#debug') {
  const [isDebugMode, setIsDebugMode] = useState(false)

  useEffect(() => {
    const checkDebugMode = () => {
      setIsDebugMode(window.location.hash === hashKey)
    }

    // Controllo iniziale
    checkDebugMode()

    // Aggiunge un listener per i cambiamenti di hash nell'URL
    window.addEventListener('hashchange', checkDebugMode)

    return () => {
      window.removeEventListener('hashchange', checkDebugMode)
    }
  }, [hashKey])

  return isDebugMode
}

export default useDebugMode
