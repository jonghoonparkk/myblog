import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import { visit } from 'unist-util-visit'
import rehypeStringify from 'rehype-stringify'

// MDX 콘텐츠에서 첫 번째 이미지를 추출하는 함수
export async function extractFirstImage(mdxContent: string): Promise<string | null> {
  let firstImage: string | null = null

  await unified()
    .use(rehypeParse, { fragment: true })
    .use(() => (tree) => {
      visit(tree, 'element', (node: any) => {
        if (node.tagName === 'img' && node.properties && node.properties.src) {
          firstImage = node.properties.src as string
          return false // 첫 번째 이미지를 찾으면 중지
        }
      })
    })
    .use(rehypeStringify)
    .process(mdxContent)

  return firstImage
}
