export interface ProjectCardType {
  id: string
  title: string
  stack: string[]
  ogImage: string
  url: string
}

export const PROJECTS: ProjectCardType[] = [
  {
    id: 'works-app',
    title: '비즈비 웍스 앱',
    stack: [
      'React-Native',
      'TypeScript',
      'SQLite',
      'Drizzle ORM',
      'React-Query',
      'styled-component',
      'Expo',
      'Redux',
    ],
    ogImage: '/works-app-ogimg.webp',
    url: 'https://play.google.com/store/apps/details?id=com.vmerp.works&hl=ko',
  },
  {
    id: 'works-web',
    title: '비즈비 웍스 웹',
    stack: ['Vue', 'TypeScript', 'SCSS'],
    ogImage: '/works-web-ogimg.png',
    url: 'https://works.bizbee.co.kr',
  },
  {
    id: 'taxlove',
    title: '비즈비 세무사사랑',
    stack: ['Vue', 'TypeScript', 'SCSS'],
    ogImage: '/taxlove-ogimg.png',
    url: 'https://www.bizbee.co.kr/taxlove/',
  },
  {
    id: 'works-blog',
    title: '비즈비 블로그',
    stack: ['Vue', 'TypeScript', 'SCSS'],
    ogImage: '/blog-ogimg.png',
    url: 'https://blog.xn--hz2b25f79dxzi7lm.com/',
  },
  {
    id: 'haemilsenior',
    title: '마음손 Erp',
    stack: ['JavaScript', 'SCSS'],
    ogImage: '/erp-logo.svg',
    url: 'https://haemilsenior.co.kr',
  },
  {
    id: 'tax',
    title: '비즈비 Tax',
    stack: ['JavaScript', 'SCSS'],
    ogImage: 'tax-ogimg.png',
    url: 'https://www.bizbeetax.com/',
  },
  {
    id: 'taxbill',
    title: '비즈비 TaxBill',
    stack: ['JavaScript', 'SCSS'],
    ogImage: '/taxbill-ogimg.png',
    url: 'https://smarttaxbill.com/RESTful/service',
  },
]

export const PROJECT_DETAILS = [
  {
    id: 'works-app',
    title: '비즈비 웍스 앱',
    infomation:
      "기존 그룹웨어 솔루션 '비즈비 웍스'의 웹 버전을 사용하면서 모바일 앱의 필요성이 생겨 시작된 프로젝트로 React-Native 를 사용하여 앱 개발을 진행하였습니다.",
    works: [
      'WebStomp 기반 소켓 통신 채팅 기능 구현',
      'SQLite, Drizzle ORM 을 활용하여 기기 DB 를 통해 채팅 내역 저장하도록 개선',
      'react-native-gesture-handler, react-native-reanimated 를 활용하여 사용자 경헙을 높일 수 있는 앱 인터랙션 구현',
      '초기 서버상태를 관리하지 않고 있던 환경에서 주도적으로 React-Query 를 도입하여 별도의 서버 상태관리와 캐시키 관리를 통해 성능 개선 진행',
      '다국어 지원 요청으로 인해 i18n 과 언어별 ts 파일을 정의하여 요청사항 적용(일본어)',
    ],
    personnel: '프론트엔드 3명',
    features: [
      '다양한 글 유형(공지, 업무 요청, 일정 등)을 지원하는 사내 협업 게시판입니다.',
      '실시간 채팅 기반의 사내 메신저 기능',
      '기업 내 구성원뿐만 아니라 외부로 송수신 가능한 조직 메일 시스템',
      '결재 문서 작성, 승인 요청, 결재 진행 단계 관리 등을 지원하는 전자결재 시스템',
      '사내 회의실을 실시간으로 조회하고 예약할 수 있는 회의실 예약 시스템',
    ],
    stack: [
      'React-Native',
      'TypeScript',
      'SQLite',
      'Drizzle ORM',
      'React-Query',
      'styled-component',
      'Expo',
      'Redux',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.vmerp.works&hl=ko',
  },

  {
    id: 'works-web',
    title: '비즈비 웍스 웹',
    infomation:
      '그룹웨어 기반의 기업용 협업 솔루션 제품 입니다. 해당 프로젝트는 사내 구성원 간 원활한 커뮤니케이션과 업무 효율을 높이기 위해 커뮤니티 게시판, 사내 메신저, 전자결재, 조직 메일 시스템 등 주요 기능으로 구성되어 있습니다. 프론트엔드 개발자가 따로 존재하지 않았기 때문에 자연스럽게 프론트엔드 업무의 상당 부분을 맡아 UI 구현과 기능 개발을 진행하였습니다.',
    works: [
      '커뮤니티, 전자결재, 회의실 예약 파트 퍼블리싱 업무 담당',
      '인풋, 드롭박스, 버튼 등 공통 UI 컴포넌트 및 스타일시트 정의(SCSS)',
      '제품 사용자 혹은 관리자가 원하는 전자결재 양식을 만들 수 있도록 HTML 에디터 기반의 양식 편집기 구현',
      '회의실 예약 시스템 UI 및 인터랙션 구현 (타임 테이블드래그 앤 드랍, 예약 복사 등)',
      '메인 랜딩페이지 UI 및 퍼블리싱 담당',
      '관리자 페이지 UI 및 퍼블리싱 담당',
    ],
    personnel: '백엔드 3명, 퍼블리셔 2명',
    features: [
      '다양한 글 유형(공지, 업무 요청, 일정 등)을 지원하는 사내 협업 게시판입니다.',
      '실시간 채팅 기반의 사내 메신저 기능',
      '기업 내 구성원뿐만 아니라 외부로 송수신 가능한 조직 메일 시스템',
      '결재 문서 작성, 승인 요청, 결재 진행 단계 관리 등을 지원하는 전자결재 시스템',
      '사내 회의실을 실시간으로 조회하고 예약할 수 있는 회의실 예약 시스템',
    ],
    stack: ['Vue3', 'TypeScript', 'SCSS'],
    url: 'https://works.bizbee.co.kr',
  },

  {
    id: 'taxlove',
    title: '비즈비 세무사사랑',
    infomation:
      '솔루션 제품의 랜딩 페이지 이며 디자인 시안에 맞춰 반응형 UI 및 인터랙션을 구현했습니다.',
    works: [
      'Intersection Observer API를 활용해 스크롤 위치에 반응하는 애니메이션과 요소 구현',
      '스와이프 제스처 감지를 활용해 슬라이드형 UI와 모션 기반 인터랙션을 구현',
      '반복되는 UI에 들어가는 정보가 많아 Json 파일로 텍스트 정보들을 관리',
      '반응형 웹 구현',
    ],
    personnel: '퍼블리셔 1명',
    stack: ['Vue3', 'TypeScript', 'SCSS'],
    url: 'https://www.bizbee.co.kr/taxlove/',
  },

  {
    id: 'works-blog',
    title: '비즈비 블로그',
    infomation:
      '회사의 솔루션 제품들을 소개하는 블로그 페이지입니다. 반응형 웹으로 구현했으며 관리자 페이지에서 HTML 에디터를 통해 글을 등록할 수 있습니다.',
    works: [
      '블로그 페이지 및 관리지 페이지 퍼블리싱',
      '관리자가 글을 작성하여 등록할 수 있도록 HTML 에디터 기반 관리자 페이지 작업 담당',
      '도입문의 시 입력값 유효성 체크',
      '반응형 웹 구현',
    ],
    personnel: '퍼블리셔 1명, 백엔드 1명',
    stack: ['Vue3', 'TypeScript', 'SCSS'],
    url: 'https://blog.xn--hz2b25f79dxzi7lm.com/',
  },
  {
    id: 'haemilsenior',
    title: '마음손 Erp',
    infomation:
      '"마음손 ERP" 회사의 홈페이지이며 메인 페이지와 서브페이지 모두 혼자 퍼블리싱을 담당 했습니다. 메인페이지에는 풀페이지 형태의 UI가 구현되어있으며 서브 페이지에는 기관검색, 게시판, 점수 예측 등의 페이지가 있으며 모든 페이지는 반응형 웹으로 구현하였습니다.',
    works: [
      '라이브러리를 활용하지않고 스크롤을 통해 컨트롤이 가능한 풀페이지 기반 레이아웃 구현',
      '좌우 제스처 및 시간에 따라 다음 슬라이드가 등장하는 형태의 메인 슬라이드 구현',
      'Intersection Observer API를 활용해 스크롤 위치에 반응하는 애니메이션과 요소 구현',
      '기관 검색 시 카카오 지도 API 적용 및 디자인 요구사항에 맞춰 지도 핀 커스텀',
      '장기요양등급 예측 페이지에서 사용자 경험을 높이기 위해 항목 체크 시 스크롤 이벤트 적용',
    ],
    personnel: '퍼블리셔 1명, 백엔드 3명',
    stack: ['JavaScript', 'SCSS'],
    url: 'https://haemilsenior.co.kr',
  },

  {
    id: 'tax',
    title: '비즈비 Tax',
    infomation:
      '솔루션 제품의 랜딩 페이지 이며 디자인 시안에 맞춰 반응형 UI 및 인터랙션을 구현했습니다.',
    works: [
      'Intersection Observer API를 활용해 스크롤 위치에 반응하는 애니메이션과 요소 구현',
      'keyframes 애니메이션을 활용하여 이미지가 커지는 형태의 애니메이션 구현',
      '도입문의 시 입력값 유효성 체크',
      '반응형 웹 구현',
    ],
    personnel: '퍼블리셔 1명',
    stack: ['JavaScript', 'SCSS'],
    url: 'https://www.bizbeetax.com/',
  },

  {
    id: 'taxbill',
    title: '비즈비 TaxBill',
    infomation:
      '솔루션 제품의 랜딩 페이지 이며 디자인 시안에 맞춰 반응형 UI 및 인터랙션을 구현했습니다.',
    works: [
      'Intersection Observer API를 활용해 스크롤 위치에 반응하는 애니메이션과 요소 구현',
      '동일한 속도로 움직이는 슬라이드 UI 구현',
      '다양한 이미지들을 스크롤 위치에 따라 등장하도록 구현',
      '반응형 웹 구현',
    ],
    personnel: '퍼블리셔 1명',
    stack: ['JavaScript', 'SCSS'],
    url: 'https://smarttaxbill.com/RESTful/service',
  },
]
