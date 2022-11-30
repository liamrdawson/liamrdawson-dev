import { useEffect, useState } from 'react'

/**
 *
 * To avoid issues during rehydration, we need to ensure that the rehydrated app matches the original HTML.
 * Use useEffect to trigger a re-render, React should notice that there's some new content to render
 * and update the DOM accordingly.
 */
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

export default useHasMounted
