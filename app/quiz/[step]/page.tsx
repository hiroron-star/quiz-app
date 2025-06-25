// app/quiz/[step]/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import questions, { Question } from '../data/questions'

export default function QuestionPage() {
  const router = useRouter()
  const params = useParams()
  const step = Number(params.step)
  const question: Question | undefined = questions[step - 1]
  const [selected, setSelected] = useState('')

  useEffect(() => {
    if (!question) router.replace('/quiz')
  }, [question, router])

  const next = () => {
    const prev = JSON.parse(localStorage.getItem('answers') || '[]')
    localStorage.setItem('answers', JSON.stringify([...prev, selected]))
    router.push(step < questions.length ? `/quiz/${step + 1}` : '/quiz/result')
  }

  if (!question) return null
  const progress = Math.round(((step - 1) / questions.length) * 100)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E8F7E4 0%, #FFFFFF 100%)',
        py: 3,
      }}
    >
      <Box sx={{ px: 2, mb: 1 }}>
        <Typography variant="body2" sx={{ textAlign: 'right', fontSize: '0.875rem' }}>
          {progress}% 
        </Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3 }} />
      </Box>

      <Card sx={{ mx: 2, p: 2, boxShadow: 2 }}>
        <Typography variant="h5" gutterBottom>
          Q{step}. {question.text}
        </Typography>
        <FormControl>
          <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
            {question.options.map((opt, i) => (
              <FormControlLabel
                key={i}
                value={opt.categoryKey}
                control={
                  <Radio
                    icon={<CheckBoxOutlineBlankIcon />}
                    checkedIcon={<CheckBoxIcon />}
                    color="primary"
                  />
                }
                label={opt.label}
                sx={{ mb: 1 }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>

      <Box sx={{ px: 2, mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          disabled={!selected}
          onClick={next}
          sx={{
            py: 1.2,
            fontSize: '1rem',
            backgroundColor: 'secondary.main',
            '&:hover': { backgroundColor: 'secondary.dark', transform: 'scale(1.03)' },
          }}
        >
          {step < questions.length ? '次へ' : '結果を見る'}
        </Button>
      </Box>
    </Box>
  )
}
