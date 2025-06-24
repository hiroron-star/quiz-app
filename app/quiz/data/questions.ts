export type Option = {
  label: string
  categoryKey: string
}

export type Question = {
  id: number
  text: string
  options: Option[]
}

// 例として 2 問だけ列挙。実際は 10 問分を書き出してください
const questions: Question[] = [
  {
    id: 1,
    text: 'この中で一番当てはまるものを選んでください。',
    options: [
      { label: '日常のことを過剰に心配する', categoryKey: 'GAD' },
      { label: '突然、理由もなく激しい動悸や息切れに襲われる', categoryKey: 'Panic' },
      { label: '人前で過剰に緊張する', categoryKey: 'Social' },
      { label: '特定の対象を強く避けている', categoryKey: 'Phobia' },
      { label: '鍵・火元を何度も確認してしまう', categoryKey: 'OCD' },
      { label: '大切な人と離れるとき強い不安を感じる', categoryKey: 'Separation' },
    ],
  },
  {
    id: 2,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '「うまくいかなかったら…」と最悪を想定する', categoryKey: 'GAD' },
      /* ...他５つ */
    ],
  },
  // 〜残り 8 問...
]

export default questions
