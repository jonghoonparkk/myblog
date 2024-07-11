// app/tags/page.tsx
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import ClientComponent from './ClientComponent' // 클라이언트 컴포넌트 임포트

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  
  return (
    <ClientComponent sortedTags={sortedTags} tagCounts={tagCounts} />
  )
}
