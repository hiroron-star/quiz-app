import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontSize: 18,
    h5: { fontSize: '1.5rem' },
    body1: { fontSize: '1.2rem' },
  },
})

export default theme