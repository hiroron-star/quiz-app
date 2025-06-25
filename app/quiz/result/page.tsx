// app/quiz/result/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { Box, Button, Card, Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'

const resultDetails: Record<string, { title: string; description: string }> = {
  GAD: {
    title: '全般性不安（GAD）',
    description:
      'あなたは日常生活のささいなことまで過剰に心配してしまう傾向があります。仕事や人間関係、健康について「もしうまくいかなかったら…」と考え、不安が頭から離れません。人から「考えすぎだよ」と言われても止められず、肩こりや胃痛など身体症状を伴うこともあります。',
  },
  Panic: {
    title: 'パニック性不安',
    description:
      '予期せず突然の動悸や息切れ、めまいを伴うパニック発作が起こりやすいタイプです。発作中には「死ぬかもしれない」という強い恐怖を感じ、再発を不安視して生活範囲を制限してしまう傾向があります。人混みや閉鎖空間を避けがちで、発作後の疲労感も強いのが特徴です。',
  },
  Social: {
    title: '社会的不安（SAD）',
    description:
      '人前での発言やプレゼン、初対面の場面で強い緊張を覚え、声が震えたり赤面したりします。他人の視線や評価が気になりすぎて、会議や飲み会を回避しがちです。発言後には自分の言動を何度も反芻し、人間関係に消極的になることがあります。',
  },
  Phobia: {
    title: '特定の恐怖（フォビア）',
    description:
      '特定の対象（虫・高所・飛行機など）に恐怖心があり、日常生活に支障をきたすことがあります。理屈では安全と分かっていても、対象を目にすると冷や汗や動悸が起こり、行動範囲を制限してしまいます。過去の怖い経験がトラウマとして影響している場合もあります。',
  },
  OCD: {
    title: '強迫性障害（OCD）',
    description:
      '鍵やガス元栓の確認、手洗いなどを繰り返す強迫行為が特徴です。「やらなければ悪いことが起こる」と感じ、止めたくても止められず、時間を浪費してしまいます。本人も「変だ」と気付きながらやめられず、日常生活や仕事に支障が出がちです。',
  },
  Separation: {
    title: '分離不安（成人）',
    description:
      '大切な人と離れる際に強い不安や苦しさを感じ、一人でいるのがつらいタイプです。相手の安否が気になりすぎて頻繁に連絡し、依存的な行動を取ってしまいます。過去の別れや離別経験がトラウマとなり、過度な執着心が残る傾向があります。',
  },
}

export default function ResultPage() {
  const [top, setTop] = useState<string>('')

  useEffect(() => {
    const ans: string[] = JSON.parse(localStorage.getItem('answers') || '[]')
    const counts = ans.reduce<Record<string, number>>((a, k) => {
      a[k] = (a[k] || 0) + 1
      return a
    }, {})
    const [cat] = Object.entries(counts).sort(([, a], [, b]) => b - a)[0] || ['']
    setTop(cat)
  }, [])

  const retry = () => {
    localStorage.removeItem('answers')
    location.href = '/quiz'
  }

  const detail = resultDetails[top] || {
    title: '診断結果なし',
    description: '診断結果を取得できませんでした。最初からやり直してください。',
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #E8F7E4 100%)',
        py: 4,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%', p: 3, boxShadow: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          診断結果
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {detail.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {detail.description}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ReplayIcon />}
          onClick={retry}
          sx={{
            backgroundColor: 'secondary.main',
            '&:hover': { backgroundColor: 'secondary.dark' },
            py: 1.2,
            fontSize: '1rem',
          }}
        >
          もう一度診断する
        </Button>
      </Card>
    </Box>
  )
}
