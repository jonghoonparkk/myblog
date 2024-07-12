import modulesData from '@/data/modulesData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Modules' })

export default function Modules() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extralight leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Module
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            👻총 5가지의 모듈 중 자신의 단계에 맞게 선택해서 하나씩 정복해보자!👻
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {modulesData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
