// app/quiz/data/questions.ts
export type Option = {
  label: string
  categoryKey: string
}

export type Question = {
  id: number
  text: string
  options: Option[]
}

const questions: Question[] = [
  {
    id: 1,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '日常のこと（健康・仕事・人間関係など）を過剰に心配する', categoryKey: 'GAD' },
      { label: '突然、理由もなく激しい動悸や息切れに襲われることがある', categoryKey: 'Panic' },
      { label: '人前で話すと、過剰に緊張・パニックに近い状態になる', categoryKey: 'Social' },
      { label: '特定の対象（虫、高所、飛行機など）を強く避けている', categoryKey: 'Phobia' },
      { label: '鍵・火元・戸締まりなどを何度も確認してしまう', categoryKey: 'OCD' },
      { label: '大切な人が離れるとき、極端な不安や苦しさを感じる', categoryKey: 'Separation' },
    ],
  },
  {
    id: 2,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '「うまくいかなかったら…」と最悪の想定をしてしまう', categoryKey: 'GAD' },
      { label: '発作中に「このまま死ぬかも」と思ったことがある', categoryKey: 'Panic' },
      { label: '他人の評価や視線がとても気になる', categoryKey: 'Social' },
      { label: 'それを見ただけで心拍が上がる、冷や汗が出る', categoryKey: 'Phobia' },
      { label: '手洗いや清潔のこだわりが強く、時間を取られる', categoryKey: 'OCD' },
      { label: 'パートナーや家族と長く離れることがつらい・怖い', categoryKey: 'Separation' },
    ],
  },
  {
    id: 3,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '心配をしても現実的な対処より、不安ばかりが先行する', categoryKey: 'GAD' },
      { label: '息が吸えなくなりそうな感覚になることがある', categoryKey: 'Panic' },
      { label: '他人に笑われている・変に見られている気がして落ち着かない', categoryKey: 'Social' },
      { label: '無理に近づこうとするとパニックに近い反応が出る', categoryKey: 'Phobia' },
      { label: '頭の中に「不吉な考え」や「やらなきゃ」という思いが繰り返される', categoryKey: 'OCD' },
      { label: '離れると「何か起こるのでは」と不安になってしまう', categoryKey: 'Separation' },
    ],
  },
  {
    id: 4,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '心配をやめようとしても止まらない', categoryKey: 'GAD' },
      { label: 'めまいやふらつきで立っていられなくなることがある', categoryKey: 'Panic' },
      { label: '話し方や表情などに自信が持てない', categoryKey: 'Social' },
      { label: '恐怖対象のせいで日常の動きに支障が出ている', categoryKey: 'Phobia' },
      { label: '「この行動をしないと悪いことが起きる」と感じてしまう', categoryKey: 'OCD' },
      { label: '一人でいる時間が落ち着かず、不安感が増す', categoryKey: 'Separation' },
    ],
  },
  {
    id: 5,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '人から「考えすぎだよ」と言われることがある', categoryKey: 'GAD' },
      { label: '発作の後、ひどく疲れる・ぐったりする', categoryKey: 'Panic' },
      { label: '人前だと声が震えたり、手汗や赤面が出る', categoryKey: 'Social' },
      { label: '理屈では「大丈夫」と思っても身体が反応してしまう', categoryKey: 'Phobia' },
      { label: 'やめたいのにやめられない行動パターンがある', categoryKey: 'OCD' },
      { label: '離れる前に何度も確認を取ったり、しがみついてしまう', categoryKey: 'Separation' },
    ],
  },
  {
    id: 6,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '神経が過敏になっていて、疲れやすい', categoryKey: 'GAD' },
      { label: 'また起こるかもしれないという「予期不安」が強い', categoryKey: 'Panic' },
      { label: '自分の発言を後から繰り返し反省してしまう', categoryKey: 'Social' },
      { label: '周囲に説明してもなかなか理解されない', categoryKey: 'Phobia' },
      { label: '自分でも「変だな」と思っているのに止まらない', categoryKey: 'OCD' },
      { label: '相手に連絡が取れないと頭がいっぱいになる', categoryKey: 'Separation' },
    ],
  },
  {
    id: 7,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '集中力が落ちた・考えがまとまらないと感じる', categoryKey: 'GAD' },
      { label: '発作が起きた状況や場所を避けるようになっている', categoryKey: 'Panic' },
      { label: '注目される状況を避けようとしてしまう', categoryKey: 'Social' },
      { label: '他の人が平気な場面でも、自分だけ恐怖を感じる', categoryKey: 'Phobia' },
      { label: '時間を無駄にしていると感じてもやってしまう', categoryKey: 'OCD' },
      { label: '付き合う相手に強く執着しすぎてしまう傾向がある', categoryKey: 'Separation' },
    ],
  },
  {
    id: 8,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '寝る前に不安で眠れない／夜中に目が覚める', categoryKey: 'GAD' },
      { label: '人混みや閉鎖空間で不安になることが多い', categoryKey: 'Panic' },
      { label: '飲み会・プレゼン・初対面の場などが強いストレス', categoryKey: 'Social' },
      { label: '怖い対象を予測して、行動や予定を制限している', categoryKey: 'Phobia' },
      { label: '儀式的な動作（数字、順番、繰り返し）にこだわりがある', categoryKey: 'OCD' },
      { label: '過去の別れが強いトラウマとして残っている', categoryKey: 'Separation' },
    ],
  },
  {
    id: 9,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: '肩こりや胃の不調など、体の緊張が続いている感じがある', categoryKey: 'GAD' },
      { label: '何度も検査したのに「身体は異常なし」と言われた', categoryKey: 'Panic' },
      { label: '周囲の反応を過剰に深読みしてしまう', categoryKey: 'Social' },
      { label: '恐怖対象に関連する夢や記憶に悩まされることがある', categoryKey: 'Phobia' },
      { label: '頭の中がずっと忙しくて疲れる感じがある', categoryKey: 'OCD' },
      { label: '愛情を失うことに対して異常な恐怖感がある', categoryKey: 'Separation' },
    ],
  },
  {
    id: 10,
    text: '次のうち最も当てはまるものを選んでください。',
    options: [
      { label: 'ずっと「何か悪いことが起きそう」という予感が消えない', categoryKey: 'GAD' },
      { label: '発作のせいで外出や予定に支障が出ている', categoryKey: 'Panic' },
      { label: 'そのせいで仕事や人間関係が消極的になっている', categoryKey: 'Social' },
      { label: '過去の怖い経験（トラウマ）が今も影響している', categoryKey: 'Phobia' },
      { label: '人前でもその行動をこっそりしてしまうことがある', categoryKey: 'OCD' },
      { label: '自分でも依存しすぎていると感じるがやめられない', categoryKey: 'Separation' },
    ],
  },
]

export default questions
