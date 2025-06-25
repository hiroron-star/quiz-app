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
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        あなたの不安タイプをチェック！
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        簡単な10問で、あなたにぴったりのタイプを診断します。
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={start}
        sx={{
          py: 1.2,
          px: 5,
          fontSize: '1.1rem',
          backgroundColor: 'secondary.main',
          '&:hover': { backgroundColor: 'secondary.dark', transform: 'scale(1.05)' },
        }}
      >
        スタート
      </Button>
    </Box>
  )
}
