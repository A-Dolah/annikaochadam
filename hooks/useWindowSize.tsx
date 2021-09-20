import { useState, useEffect } from 'react'

interface WindowSizeState {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeState>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener(`resize`, handleResize)
    handleResize()

    return () => window.removeEventListener(`resize`, handleResize)
  }, [])
  return windowSize
}

export default useWindowSize
