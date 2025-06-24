// app/quiz/[step]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
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
} from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import questions, { Question } from '../data/questions';

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();
  const step = Number(params.step);
  const question: Question | undefined = questions[step - 1];

  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    if (!question) {
      router.replace('/quiz');
    }
  }, [question, router]);

  const handleNext = () => {
    const prev = JSON.parse(localStorage.getItem('answers') || '[]');
    localStorage.setItem('answers', JSON.stringify([...prev, selected]));
    if (step < questions.length) {
      router.push(`/quiz/${step + 1}`);
    } else {
      router.push('/quiz/result');
    }
  };

  if (!question) return null;

  const progress = Math.round(((step - 1) / questions.length) * 100);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF7E6 0%, #FFE4B5 100%)',
        py: 4,
      }}
    >
      {/* 進捗バー */}
      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold' }}>
          {progress}% completed
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* 質問カード */}
      <Card
        sx={{
          p: 3,
          mx: 2,
          borderRadius: 3,
          boxShadow: 4,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 },
          bgcolor: '#ffffffcc',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <EmojiObjectsIcon sx={{ mr: 1, fontSize: '1.8rem' }} />
          <Typography variant="h5" gutterBottom sx={{ fontSize: '1.3rem' }}>
            Q{step}. {question.text}
          </Typography>
        </Box>
        <FormControl component="fieldset">
          <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
            {question.options.map((opt, i) => (
              <FormControlLabel
                key={i}
                value={opt.categoryKey}
                control={<Radio />}
                label={<Typography sx={{ fontSize: '1.1rem' }}>{opt.label}</Typography>}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>

      {/* 次へボタン */}
      <Box sx={{ px: 2, mt: 3 }}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleNext}
          disabled={!selected}
          sx={{
            py: 1.5,
            transition: 'transform 0.15s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          {step < questions.length ? '次へ' : '結果を見る'}
        </Button>
      </Box>
    </Box>
  );
}
