/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    // 내부 링크: next/link를 사용하여 현재 탭에서 열림
    return <Link href={href} {...rest}><a {...rest} /></Link>
  }

  if (isAnchorLink) {
    // 앵커 링크: 현재 탭에서 열림
    return <a href={href} {...rest} />
  }

  // 외부 링크: 새 탭에서 열림
  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}

export default CustomLink
