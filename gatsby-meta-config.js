module.exports = {
  title: `enfp-y.github.io`,
  description: `Cloud sales 공부 기록`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://enfp-y.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김연화`,
    bio: {
      role: `Sales`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '호기심이 많은'],
      thumbnail: '기며나.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://enfp-y.github.io/`,
      linkedIn: ``, // `https://www.linkedin.com/in/yeonhwa-kim-402748199/`,
      email: ``, // `dusghk0628@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2013.02 ~ 2017.01',
        activity: 'Lottecard | Mobile Voucher Operation Manager ',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2019.11 ~ 2020.10',
        activity: 'Userhabit | UX analytics SaaS Sales Manager ',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.04 ~ 2022.05',
        activity: 'Unipoint | Jennifer/finance SI Sales Manager ',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2022.10 ~ 현재',
        activity: 'MegazoneCloud | AWS Game Group/scale Team Sales Manager ',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '롯데모바일상품권 프로젝트',
        description:
          '2013년 첫 사회생활로, 롯데카드에서 신규로 출시한 롯데모바일상품권과 함께 운영/기획 업무를 맡게되었습니다. 소셜커머스, 오픈마켓 등 다양한 판매 채널 확대, 총 100억 매출 달성. 면세점 전용 모바일 상품권 프로젝트 PL. 모바일 상품권 시스템 및 admin 기능 기획. 프로젝트 진척 및 인력 관리'
        techStack: ['operation', 'abc'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
