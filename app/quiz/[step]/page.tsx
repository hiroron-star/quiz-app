'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import questions, { Question } from '../data/questions'

type Props = { params: { step: string } }

export default function QuestionPage({ params }: Props) {
  const step = parseInt(params.step, 10)
  const question: Question | undefined = questions[step - 1]
  const router = useRouter()
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    if (!question) {
      router.replace('/quiz') // 範囲外ならスタートへ戻す
    }
  }, [question, router])

  const handleNext = () => {
    // 回答を保持
    const prev = JSON.parse(localStorage.getItem('answers') || '[]')
    localStorage.setItem('answers', JSON.stringify([...prev, selected]))
    // 次のステップ or 結果へ
    if (step < questions.length) {
      router.push(`/quiz/${step + 1}`)
    } else {
      router.push('/quiz/result')
    }
  }

  if (!question) return null

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Q{step}. {question.text}
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
          {question.options.map((opt, i) => (
            <FormControlLabel key={i} value={opt.categoryKey} control={<Radio />} label={opt.label} />
          ))}
        </RadioGroup>
      </FormControl>
      <Box sx={{ mt: 3, textAlign: 'right' }}>
        <Button variant="contained" onClick={handleNext} disabled={!selected}>
          {step < questions.length ? '次へ' : '結果を見る'}
        </Button>
      </Box>
    </Box>
  )
}
