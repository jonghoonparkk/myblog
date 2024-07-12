interface Module {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const modulesData: Module[] = [
  {
    title: '🐍파이썬 모듈🐍',
    description: `인공지능에 가장 많이 쓰이는 파이썬 언어를 배워봅시다.`,
    imgSrc: '/static/images/module/ai/0.png',
    href: 'https://hyai.vercel.app/blog/%ED%8C%8C%EC%9D%B4%EC%8D%AC%20%EB%AA%A8%EB%93%88',
  },
  {
    title: '🔧C언어 모듈🔧',
    description: `시스템 프로그래밍과 임베디드 시스템에서 널리 사용되는 C언어를 배워봅시다.`,
    imgSrc: '/static/images/module/c/m3/1.png',
    href: 'https://hyai.vercel.app/blog/C%EC%96%B8%EC%96%B4%20%EB%AA%A8%EB%93%88',
  },
  {
    title: '🤖인공지능 모듈🤖',
    description: `인공지능의 세계에 첫 발을 내딛어 봅시다. 인공지능(AI)은 데이터를 통해 학습하고, 예측하며, 인간과 비슷한 지능적인 작업을 수행하는 기술입니다.`,
    imgSrc: '/static/images/module/ai/3.png',
    href: 'https://hyai.vercel.app/blog/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EB%AA%A8%EB%93%88',
  },
  {
    title: '👻머신러닝 모듈👻',
    description: `머신러닝 모듈을 통해 현대 데이터 과학의 핵심 기술인 머신러닝을 배워봅시다.`,
    imgSrc: '/static/images/module/ai/4.png',
    href: 'https://hyai.vercel.app/blog/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%20%EB%AA%A8%EB%93%88',
  },
  {
    title: '🧠딥러닝 모듈🧠',
    description: `딥러닝의 기본 개념과 원리를 배워봅시다. 딥러닝은 인공지능의 한 분야로, 인공 신경망을 기반으로 하는 알고리즘을 사용하여 데이터를 학습하고 예측하는 기술입니다.`,
    imgSrc: '/static/images/module/ai/6.png',
    href: 'https://hyai.vercel.app/blog/%EB%94%A5%EB%9F%AC%EB%8B%9D%20%EB%AA%A8%EB%93%88',
  },
  
]

export default modulesData
