'use client'

import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

export default function ResultPage() {
  const [topCategory, setTopCategory] = useState<string>('')

  useEffect(() => {
    const answers: string[] = JSON.parse(localStorage.getItem('answers') || '[]')
    // 出現回数をカウント
    const counts = answers.reduce<Record<string, number>>((acc, key) => {
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {})
    // 最も多い categoryKey を取得
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    setTopCategory(sorted[0]?.[0] || '該当なし')
  }, [])

  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        診断結果
      </Typography>
      <Typography variant="h6">あなたのタイプ: {topCategory}</Typography>
      {/* 必要に応じて詳細説明をマッピングして出力 */}
    </Box>
  )
}
