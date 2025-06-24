// app/quiz/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import { Box, Button, Typography } from '@mui/material'

export default function QuizStartPage() {
  const router = useRouter()

  const handleStart = () => {
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
        p: 2,
        background: 'linear-gradient(135deg, #FFF7E6 0%, #FFE4B5 100%)',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontSize: '1.8rem', mb: 4 }}>
        診断テストを始めましょう！
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={handleStart}
        sx={{
          py: 1.5,
          px: 4,
          transition: 'transform 0.15s',
          '&:hover': { transform: 'scale(1.05)' },
        }}
      >
        スタート
      </Button>
    </Box>
  )
}
