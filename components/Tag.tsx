import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-lg font-thin uppercase text-white hover:text-primary-100 dark:hover:text-primary-100"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
