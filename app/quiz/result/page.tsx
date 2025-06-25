// app/quiz/result/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { Box, Button, Card, Typography } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

const resultDetails: Record<string, { title: string; description: string }> = {
  GAD: {
    title: '全般性不安（GAD）',
    description:
      '日常のささいなことまで「もしうまくいかなかったら…」と考え、不安が頭を離れないタイプです。\n\n- 仕事や人間関係、健康について過剰に心配\n- 考えすぎで肩こりや胃痛など身体症状を伴う\n- 「考えすぎ」と言われても止められない',
  },
  Panic: {
    title: 'パニック性不安',
    description:
      '予期せず動悸・息切れ・めまいを伴う強い恐怖（パニック発作）が起こりやすいタイプです。\n\n- 発作中に「死ぬかも」と感じる\n- 再発を怖れて人混みや閉鎖空間を避ける\n- 発作後の疲労感が強い',
  },
  Social: {
    title: '社会的不安（SAD）',
    description:
      '人前での発言やプレゼンで声が震える、赤面するなどの強い緊張を感じるタイプです。\n\n- 他人の評価や視線が気になりすぎる\n- 会議や飲み会を回避しがち\n- 発言後に何度も反芻してしまう',
  },
  Phobia: {
    title: '特定の恐怖（フォビア）',
    description:
      '虫・高所・飛行機など、特定の対象に対して激しい恐怖を感じるタイプです。\n\n- 理屈では「大丈夫」と分かっても身体が反応\n- 対象を避けるため行動範囲が制限される\n- 過去のトラウマが影響している場合も',
  },
  OCD: {
    title: '強迫性障害（OCD）',
    description:
      '鍵やガス元の確認、手洗いなどの儀式的行動を繰り返すタイプです。\n\n- 止めたくても行動が止まらない\n- 時間を浪費し、仕事や日常に支障が出る\n- 自分で「変だ」と気づきながらやめられない',
  },
  Separation: {
    title: '分離不安（成人）',
    description:
      '大切な人と離れる際に強い不安を感じ、依存的な行動を取りやすいタイプです。\n\n- 離れる前後に何度も確認・連絡を取る\n- 一人でいることがつらく感じる\n- 過去の離別経験がトラウマに',
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

  const detail = resultDetails[top] || { title: '', description: '' }

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
      <Card sx={{ maxWidth: 400, width: '100%', p: 3, boxShadow: 2, textAlign: 'center' }}>
        <EmojiEventsIcon sx={{ fontSize: '3rem', color: 'secondary.main', mb: 1 }} />
        <Typography variant="h4" sx={{ mb: 2 }}>
          診断結果
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {detail.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: 'pre-line', textAlign: 'left', mb: 3, fontSize: '1rem' }}
        >
          {detail.description}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ReplayIcon />}
          onClick={retry}
          sx={{
            backgroundColor: 'secondary.main',
            '&:hover': { backgroundColor: 'secondary.dark', transform: 'scale(1.03)' },
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
