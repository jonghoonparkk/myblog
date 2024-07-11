// app/tags/ClientComponent.tsx
'use client' // 클라이언트 컴포넌트로 선언

import { useEffect, useState } from 'react'
import styles from '../../css/Home.module.css'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'

export default function ClientComponent({ sortedTags, tagCounts }) {
  const [angle, setAngle] = useState(-45) // 각도를 설정하기 위한 상태 추가

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(Math.floor(Math.random() * 360)) // 각도를 0에서 359 사이의 랜덤한 값으로 설정
    }, 3000) // 3초마다 각도를 변경

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={styles.background}
      style={{
        background: `linear-gradient(${angle}deg, #AC9CDF, #D194BA, #DFA0A6, #E4B898)`, // 랜덤 각도를 적용
      }}
    >
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-thin leading-9 tracking-tight text-gray-100 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {sortedTags.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mb-2 mr-5 mt-2">
                <Tag text={t} />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-lg font-semibold uppercase text-gray-100 dark:text-gray-100"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagCounts[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
