import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">HELLO</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
