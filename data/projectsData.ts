interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: '2024 HYAI Challenge',
    description: `2024 HYAI Challenge는 인공지능 대회로 사회에서 발생하는 문제를 해결하는 AI 모델을 개발하는 대회입니다! 참가자들은 실제 문제를 파악하고 이를 해결하기 위한 창의적인 AI 모델을 제작하면 됩니다. 한양대학교 인공지능학회 HYAI에서 주최 및 주관하여 진행합니다.`,
    imgSrc: '/static/images/2024-1/hyai_challenge/00.png',
    href: 'https://hyai.vercel.app/blog/2024%20HYAI%20Challenge',
  },
  {
    title: 'HYAI 1학기 MT 공지',
    description: `🔅MT 일정 및 장소가 확정되어 안내드립니다🔅

아래 주요사항 확인 후 참여를 원하시는 분은 아래 링크로 접속하셔서 구글폼 작성 및 입금을 해주시면 됩니다!`,
    imgSrc: '/static/images/2024-1/mt/00.png',
    href: 'https://hyai.vercel.app/blog/HYAI%201%ED%95%99%EA%B8%B0%20MT%20%EA%B3%B5%EC%A7%80',
  },
  {
    title: '제 1회 HYAI 세미나',
    description: `학회원분들을 위한 세미나를 진행하려고 합니다!

🗓 일시: 2024년 5월 27일 월요일, 18:00~22:00 📍 장소: 학연산클러스터 510호 👥 대상: HYAI 인공지능학회 회원`,
    imgSrc: '/static/images/2024-1/seminar/00.jpg',
    href: 'https://hyai.vercel.app/blog/%EC%A0%9C%201%ED%9A%8C%20HYAI%20%EC%84%B8%EB%AF%B8%EB%82%98',
  },
  {
    title: 'HYSTUDY 1학기 성과발표회 및 기말고사 야식 사업',
    description: `2024 HYAI Challenge는 인공지능 대회로 사회에서 발생하는 문제를 해결하는 AI 모델을 개발하는 대회입니다! 참가자들은 실제 문제를 파악하고 이를 해결하기 위한 창의적인 AI 모델을 제작하면 됩니다. 한양대학교 인공지능학회 HYAI에서 주최 및 주관하여 진행합니다.`,
    imgSrc: '/static/images/2024-1/성과발표/00.jpg',
    href: 'https://hyai.vercel.app/blog/HYSTUDY%201%ED%95%99%EA%B8%B0%20%EC%84%B1%EA%B3%BC%EB%B0%9C%ED%91%9C%ED%9A%8C%20%EB%B0%8F%20%EA%B8%B0%EB%A7%90%EA%B3%A0%EC%82%AC%20%EC%95%BC%EC%8B%9D%20%EC%82%AC%EC%97%85',
  },
  
]

export default projectsData
