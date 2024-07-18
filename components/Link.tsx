/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import Image from 'next/image'
import React from 'react'

// TableProps 타입을 정의하여 데이터 구조 명시
type TableProps = {
  data: {
    headers: string[]
    rows: (string | number)[][]
  }
}

// Table 컴포넌트의 타입 지정
const Table = ({ data }: TableProps) => {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

// CustomLink 컴포넌트에 타입 지정
const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a href={href} {...rest} />
}

// 이미지 컴포넌트에 타입 지정 및 클래스 추가
const RoundedImage = (props: DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

// 코드 블록 하이라이팅 기능 추가
const Code = ({ children, ...props }: { children: ReactNode }) => {
  const codeHTML = highlight(children as string)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// 문자열을 슬러그로 변환하는 함수
function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // 문자열의 양 끝 공백 제거
    .replace(/\s+/g, '-') // 공백을 -로 대체
    .replace(/&/g, '-and-') // &를 'and'로 대체
    .replace(/[^\w\-]+/g, '') // -를 제외한 모든 비문자 제거
    .replace(/\-\-+/g, '-') // 여러 -를 하나의 -로 대체
}

// 헤딩 생성 함수
function createHeading(level: number) {
  const Heading = ({ children }: { children: ReactNode }) => {
    const slug = slugify(children as string)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

// MDX 컴포넌트에 사용할 커스텀 컴포넌트들 정의
const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

// CustomMDX 컴포넌트
export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
