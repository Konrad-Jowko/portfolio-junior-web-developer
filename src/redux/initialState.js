/* INITIAL SETTINGS FOR COMPONENT */

export const initialState = {
  global: {
    mode: 'light',
    language: 'eng',
    loading: false,
  },
  header: {
    fetch: true,
    navbarElements: {
      eng: [
        {name: 'Portfolio', link: '/portfolio'},
        {name: 'Experience', link: '/experience'},
        {name: 'Education', link: '/education'},
        {name: 'Contact', link: '/contact'},
      ],
      pl: [
        {name: 'Portfolio', link: '/portfolio'},
        {name: 'Doświadczenie', link: '/experience'},
        {name: 'Wykształcenie', link: '/education'},
        {name: 'Kontakt', link: '/contact'},
      ],
    },
  },
  homepage: {
    pl: {
      hi: 'Cześć,',
      introduction: 'mam na imię Konrad,',
      subtitle: ' i jestem pełnym zapału, początkującym ',
      position: 'junior web developerem',
      toPortfolioClick: 'Kliknij',
      toPortfolioLink: 'tutaj',
      toPortfolioContent: ', by zobaczyć moje portfolio,',
      about: {
        toAboutContent: 'albo scrolluj w dół, by mnie lepiej poznać',
        aboutElements: [
          {
            title: 'Więc, kim jestem?',
            subtitle: 'Test',
          },
        ],
      },
    },
    eng: {
      hi: 'Hi,',
      introduction: 'my name is Konrad,',
      subtitle: 'and I\'m an eager, up-and-coming ',
      position: 'junior web developer',
      toPortfolioClick: 'Click',
      toPortfolioLink: 'here',
      toPortfolioContent: ', to see my portfolio,',
      about: {
        toAboutContent: 'or scroll down, to get to know me better',
        aboutElements: [
          {
            title: 'So, who am I?',
            subtitle: 'Test',
          },
        ],
      },
    },
  },
};
