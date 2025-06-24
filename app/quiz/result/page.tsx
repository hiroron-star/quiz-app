// app/quiz/result/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Box, Card, Typography, Button } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'

const resultDetails: Record<string, { title: string; description: string }> = {
  GAD: {
    title: '全般性不安（GAD）',
    description: '日常的な心配が強く現れるタイプです。',
  },
  Panic: {
    title: 'パニック性不安',
    description: '突然の動悸・息切れが特徴的です。',
  },
  Social: {
    title: '社会的不安（社交不安障害）',
    description: '人前での緊張が強いタイプです。',
  },
  Phobia: {
    title: '特定の恐怖（フォビア）',
    description: '特定の対象への恐怖が現れます。',
  },
  OCD: {
    title: '強迫性の不安（OCD）',
    description: '確認行動や儀式的行動が現れます。',
  },
  Separation: {
    title: '分離不安（成人）',
    description: '大切な人と離れることへの不安が強いです。',
  },
}

export default function ResultPage() {
  const [topCategory, setTopCategory] = useState<string>('')

  useEffect(() => {
    const answers: string[] = JSON.parse(localStorage.getItem('answers') || '[]')
    const counts = answers.reduce<Record<string, number>>((acc, key) => {
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {})
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    setTopCategory(sorted[0]?.[0] || '')
  }, [])

  const onRetry = () => {
    localStorage.removeItem('answers')
    window.location.href = '/quiz'
  }

  const detail = resultDetails[topCategory]

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFE4B5 0%, #FFF7E6 100%)',
        py: 6,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Card sx={{ maxWidth: 400, mx: 'auto', p: 4, boxShadow: 4 }}>
        <Typography variant="h4" gutterBottom>
          診断結果
        </Typography>
        {detail ? (
          <>
            <Typography variant="h5" gutterBottom>
              {detail.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {detail.description}
            </Typography>
          </>
        ) : (
          <Typography variant="body1" sx={{ mb: 3 }}>
            正常に診断結果を取得できませんでした。
          </Typography>
        )}
        <Button
          variant="contained"
          startIcon={<ReplayIcon />}
          onClick={onRetry}
          sx={{
            mt: 2,
            py: 1.5,
            transition: 'transform 0.15s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          再度診断する
        </Button>
      </Card>
    </Box>
  )
}
