// app/quiz/page.tsx
'use client'
import { useRouter } from 'next/navigation'
import { Box, Button, Typography } from '@mui/material'

export default function QuizStartPage() {
  const router = useRouter()
  const start = () => {
    localStorage.setItem('answers', JSON.stringify([]))
    router.push('/quiz/1')
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        background: 'linear-gradient(135deg, #E8F7E4 0%, #FFFFFF 100%)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        あなたの不安タイプをチェック！
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={start}
        sx={{
          mt: 2,
          py: 1.2,
          px: 4,
          fontSize: '1rem',
          backgroundColor: 'secondary.main',
          '&:hover': { backgroundColor: 'secondary.dark', transform: 'scale(1.05)' },
        }}
      >
        スタート
      </Button>
    </Box>
  )
}
