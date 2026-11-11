import { useCallback, useState } from 'react'

const isDark = () =>
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark')

// Reads the theme set by the script in index.html; saves only when the user toggles.
export function useTheme() {
  const [theme, setTheme] = useState(() => (isDark() ? 'dark' : 'light'))

  const toggleTheme = useCallback(() => {
    const next = isDark() ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    setTheme(next)
  }, [])

  return { theme, toggleTheme }
}
