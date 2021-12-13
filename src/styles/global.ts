import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background: ${theme.colors.background};
        font-family: 'Poppins', sans-serif;
        color: ${theme.colors.textPrimary};
    }
`