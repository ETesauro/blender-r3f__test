import { useCallback, useEffect, useState } from 'react'

function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth / window.innerHeight < 1.2)

  // Funzione per aggiornare lo stato
  const updateIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth / window.innerHeight < 1.2)
  }, [])

  useEffect(() => {
    // Aggiunge l'event listener quando il componente è montato
    window.addEventListener('resize', updateIsMobile)

    updateIsMobile()

    return () => window.removeEventListener('resize', updateIsMobile)
  }, [updateIsMobile])

  return isMobile
}

export { useMobile }
