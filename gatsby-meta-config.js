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
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
