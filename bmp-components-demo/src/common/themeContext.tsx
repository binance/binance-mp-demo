import * as React from 'react'
import { View } from '@binance/mp-components'
import {
  getSystemInfo as bnGetSystemInfo,
  onThemeChange as bnOnThemeChange,
  offThemeChange as bnOffThemeChange
} from '@binance/mp-service'

import './themeContext.scss'

type Theme = 'light' | 'dark'

const DEFAULT_THEME = 'light'
const ThemeContext = React.createContext<Theme>(DEFAULT_THEME)

export const useTheme = () => {
  return React.useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME)

  React.useEffect(() => {
    async function getSystemInfo() {
      try {
        const res = await bnGetSystemInfo()
        if (res.theme) {
          setTheme(res.theme)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getSystemInfo()
  }, [])

  React.useEffect(() => {
    function onThemeChange({ theme }) {
      setTheme(theme)
    }

    bnOnThemeChange(onThemeChange)
    return () => {
      bnOffThemeChange(onThemeChange)
    }
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      <View id='themeContext' className={`themeContext themeContext-${theme}`}>
        {children}
      </View>
    </ThemeContext.Provider>
  )
}
