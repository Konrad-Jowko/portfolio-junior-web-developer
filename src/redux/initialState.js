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
            subtitle: 'Kinoman, mól książkowy, gracz. Fan wszystkiego, co powstało w ludzkiej wyobraźni. Na pewno nie zbuntowana A.I.',
            content: 'Jestem początkującym web developerem, który obecnie skupia się na poszukiwaniach projektu umożliwiającego mi zdobycie doświadczenia zawodowego i zaznajomienie się z branżą',
          },
          {
            title: 'Jaki mam cel?',
            subtitle: 'Kiedyś byłaby to dominacja nad światem, ale skoro jakiś gość chce skolonizować Marsa, muszę mierzyć wyżej',
            content: 'Obecnie, moim celem jest budowanie doświadczenia na pozycji fullstack developera. Dodatkowo, chcę rozbudować swoje kompetencje o umiejętności pentestera oraz inżyniera bezpieczeństwa na polu aplikacji webowych',
          },
          {
            title: 'Co przekonało mnie, by iść tą drogą?',
            subtitle: 'Rób co kochasz, a nie przepracujesz ani dnia w swoim życiu',
            content: 'Fascynuję się programowaniem i szeroko pojętą technologią. Dodatkowo, od zawsze byłem rozdarty pomiędzy moją chęcią kreatywnego tworzenia a bardziej analitycznym i systematycznym podejściem do życia. Ścieżka fullstack developera jest więc dla mnie idealnym wyjściem',
          },
          {
            title: 'Gdzie jestem?',
            subtitle: 'Dzięki Internetowi - jestem wszędzie tam, gdzie być potrzebuję',
            content: 'Zazwyczaj znaleźć mnie można w Warszawie, lecz zdecydowanie jestem otwarty na propozycje pracy zdalnej - obie opcje mają swoje plusy i niosą swoje własne wyzwania',
          },
          {
            title: 'Jak wyglądam?',
            subtitle: 'Niektórzy ludzie stwierdziliby, że jestem najładniejszym facetem na świecie. Tylko nie pytajcie, co to za osoby',
            content: 'Programista na wolności',
          },
          {
            title: 'Jakie mam zainteresowania?',
            subtitle: 'O tym, co mnie interesuje, mogę opowiadać całymi godzinami',
            content: 'Wśród moich największych zaintereowań są muzyka rockowa i metalowa (grałem nawet jakiś czas w zespole), literatura fantastyczna (szczególnie Lem i Glukhovsky), gry komputerowe (na temat których wiem zdecydowanie zbyt wiele) oraz nowoczesne technologie, których prędki rozwój regularnie mnie zaskakuje',
          },
          {
            title: 'Jak pracuję?',
            subtitle: 'Łatwo możesz przekonać się o tym osobiście',
            content: 'W pracy kieruję się bardzo podobnymi zasadami jak w życiu prywatnym. Lubię budować przyjazną atmosferę, opartą na wzajemnym zaufaniu, humorze i współpracy. Wychodzę z założenia, że taka atmosfera to idealny sposób na osiągnięcie najlepszych rezultatów',
          },
        ],
        toPortfolio: 'Jeśli brzmię jak ktoś, kto pasowałby do Twojego teamu i projektu, przejrzyj proszę moje',
        toPortfolioButton: 'Portfolio',
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
            subtitle: 'Cinema lover, bookworm, gamer. A fan of everything that was created by human imagination. Definitely not a rouge A.I.',
            content: 'I am a beginner web developer who is currently focusing on looking for a project that will allow me to gain professional experience and become familiar with the industry ',
          },
          {
            title: 'What is my goal?',
            subtitle: 'Once, it would be world domination, but since some guy wants to colonize Mars, I got to aim higher',
            content: 'Currently, my goal is to build experience as a fullstack developer. In addition, I want to expand my competences with the skills of a pentester and a security engineer in the field of web applications',
          },
          {
            title: 'What convinced me to go this way?',
            subtitle: 'Choose a job you love and you’ll never have to work a day in your life',
            content: 'I am fascinated by programming and broadly understood technology. Additionally, I\'ve always been torn between my desire to be creative and a more analytical and systematic approach to life. So the fullstack developer path is the perfect solution for me ',
          },
          {
            title: 'Where am I?',
            subtitle: 'Thanks to Internet - I am everywhere where I need to be',
            content: 'Usually I can be found in Warsaw, but I am definitely open to remote work opportunities - both options have their own advantages and bring their own challenges',
          },
          {
            title: 'How do I look?',
            subtitle: 'Some people would say, that I\'m the prettiest guy alive. Just don\'t ask which people',
            content: 'A programmer in the wild',
          },
          {
            title: 'What my interests are?',
            subtitle: 'I can talk for hours about what interests me',
            content: 'Among my greatest interests are rock and metal music (I even played in a band for a while), fantasy literature (especially Lem and Glukhovsky), computer games (which I know far too much about) and modern technologies, the rapid development of which regularly surprises me',
          },
          {
            title: 'How do I work?',
            subtitle: 'Well, You can easily find out Yourself',
            content: 'At work, I follow very similar principles as in private life. I like to build a friendly atmosphere, based on mutual trust, humor and cooperation. I assume that such an atmosphere is the perfect way to achieve the best results',
          },
        ],
        toPortfolio: 'If I sound like I would fit to Your project and Your team, please consider looking through my',
        toPortfolioButton: 'Portfolio',
      },
    },
  },
  portfolio: {
    pl: {
      title: 'Oto moje portfolio!',
      subtitle1: 'Zawiera projekty, które stworzyłem, aby przedstawić swoje umiejętności',
      subtitle2: 'Przejrzyj je proszę i daj mi znać, co myślisz',
      projects: [
        {title: 'Projekt 1: Fixit!'},
        {title: 'Projekt 2: Postify'},
        {title: 'Projekt 3: Glass & Gas'},
        {title: 'Projekt 4: To Portfolio'},
      ],
    },
    eng: {
      title: 'Here is my portfolio!',
      subtitle1: 'It contains projects that I\'ve created to show my skills',
      subtitle2: 'Please, take a look and let me know what You think',
      projects: [
        {title: 'Project 1: Fixit!'},
        {title: 'Project 2: Postify'},
        {title: 'Project 3: Glass & Gas'},
        {title: 'Project 4: This Portfolio'},
      ],
    },
  },
};
