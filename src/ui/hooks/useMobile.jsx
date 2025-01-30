import { useCallback } from 'react'

function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Funzione per aggiornare lo stato
  const updateIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    // Aggiunge l'event listener quando il componente è montato
    window.addEventListener('resize', updateIsMobile)

    updateIsMobile()

    return () => window.removeEventListener('resize', updateIsMobile)
  }, [updateIsMobile])

  return isMobile
}

export default useMobile
