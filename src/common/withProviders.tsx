import * as React from 'react'
import { ThemeProvider } from './themeContext'

// Note: It is a HOC wrapper with providers.
export default function (BaseComponent) {
  return function WithProviders() {
    return (
      <ThemeProvider>
        <BaseComponent />
      </ThemeProvider>
    )
  }
}
