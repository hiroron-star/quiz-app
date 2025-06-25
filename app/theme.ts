// app/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#009944' },    // ぱにらぼの緑
    secondary: { main: '#f7941e' },  // アクセントのオレンジ
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h4: { fontSize: '1.4rem' },
    h5: { fontSize: '1.2rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
})

export default theme
