'use client'

import { useRouter } from 'next/navigation'
import { Box, Button, Typography } from '@mui/material'

export default function QuizStartPage() {
  const router = useRouter()

  const handleStart = () => {
    // localStorage に回答配列を初期化しておく
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
      }}
    >
      <Typography variant="h5" gutterBottom>
        診断テストを始める
      </Typography>
      <Button variant="contained" size="large" onClick={handleStart}>
        診断を始める
      </Button>
    </Box>
  )
}
