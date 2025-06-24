// サーバーコンポーネントのまま、MUI 周りは外だしに
import { ReactNode } from 'react'
import ThemeRegistry from './providers/ThemeRegistry'

export const metadata = {
  title: '診断テスト',
  description: '１問ずつページ遷移する診断テスト',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
