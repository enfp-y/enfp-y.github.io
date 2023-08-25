module.exports = {
  title: `enfp-y.github.io`,
  description: `잡학다식 공부 기록`,
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
        title: '롯데상품권카드 모바일교환권 고도화 프로젝트',
        description:
          '2013년 첫 사회생활로, 롯데카드에서 롯데상품권카드 모바일교환권 출시와 함께 운영 업무를 맡게되었습니다.',
        techStack: ['Operation'],
        thumbnailUrl: 'giftcard.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
