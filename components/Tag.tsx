import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  className?: string // 클래스 이름을 받을 수 있도록 수정
}

const Tag = ({ text, className = '' }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={`mr-3 text-lg font-thin uppercase ${className}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
