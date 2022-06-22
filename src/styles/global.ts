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

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.gray[700]};
        border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${theme.colors.background};
    }
`
