// app/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#009944' },    // nico.team 緑
    secondary: { main: '#f7941e' },  // アクセントのオレンジ
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h4: { fontSize: '2rem', lineHeight: 1.3 },
    h5: { fontSize: '1.5rem', lineHeight: 1.4 },
    body1: { fontSize: '1.1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.95rem', lineHeight: 1.5 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 4,
        },
      },
    },
  },
})

export default theme
