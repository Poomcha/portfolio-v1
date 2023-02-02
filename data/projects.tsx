export interface ProjectsDataI {
  name: { fr: string; en: string; [key: string]: string };
  shortName: string;
  ghPagesUrl: string;
  repoUrl: string;
  imgMinSrc: string;
  imgMinAlt: string;
  imgSrc: string;
  imgAlt: { fr: string; en: string; [key: string]: string };
  shortDescription: { fr: string; en: string; [key: string]: string };
  description: { fr: string; en: string; [key: string]: string };
  liveVersion: boolean;
  tech: string[];
}

const projects: ProjectsDataI[] = [
  // Groupomania
  {
    name: {
      fr: 'Groupomania',
      en: 'Groupomania',
    },
    shortName: 'groupomania',
    ghPagesUrl: '',
    repoUrl: 'https://github.com/Poomcha/groupomania',
    imgMinSrc: '/images/projects_logo/groupomania_min.webp',
    imgMinAlt: 'Groupomania Logo',
    imgSrc: '/images/projects/groupomania.webp',
    imgAlt: {
      fr: "Capture d'écran de l'app Groupomania.",
      en: 'Groupomania App website screenshot.',
    },
    shortDescription: {
      fr: "Réseau social d'entreprise, développé avec Vue.js et Node.js.",
      en: 'Company social network, developed with Vue.js and Node.js.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: false,
    tech: [
      'html',
      'css',
      'vue',
      'sass',
      'js',
      'mysql',
      'sequelize',
      'express',
      'node',
    ],
  },
  // Calculator App
  {
    name: {
      fr: 'Calculette',
      en: 'Calculator App',
    },
    shortName: 'frontendmentor-calculatorapp',
    ghPagesUrl: 'https://poomcha.github.io/frontendmentor-calculatorapp/',
    repoUrl: 'https://github.com/Poomcha/frontendmentor-calculatorapp',
    imgMinSrc: '/images/projects_logo/calculator_app_min.webp',
    imgMinAlt: 'Calculator App Logo',
    imgSrc: '/images/projects/calculatorapp.webp',
    imgAlt: {
      fr: "Capture d'écran de l'app Calculette.",
      en: 'Calculator App website screenshot.',
    },
    shortDescription: {
      fr: 'Une calculatrice développé avec Vue.js.',
      en: 'A calculator developed with Vue.js.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: true,
    tech: ['html', 'css', 'sass', 'vue', 'js'],
  },
  // Piiquante
  {
    name: {
      fr: 'Piiquante',
      en: 'Piiquante',
    },
    shortName: 'piiquante',
    ghPagesUrl: '',
    repoUrl: 'https://github.com/Poomcha/piiquante',
    imgMinSrc: '/images/projects_logo/piiquante_min.webp',
    imgMinAlt: 'Piiquante Logo',
    imgSrc: '/images/projects/piiquante.webp',
    imgAlt: {
      fr: "Capture d'écran site Piiquante.",
      en: 'Piiquante website screenshot.',
    },
    shortDescription: {
      fr: "Backend d'une application de notation de sauce épicé.",
      en: 'Backend of a spicy sauce notation application.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: false,
    tech: ['node', 'js', 'mongodb'],
  },
  // Kanap
  {
    name: {
      fr: 'Kanap',
      en: 'Kanap',
    },
    shortName: 'kanap',
    ghPagesUrl: 'https://poomcha.github.io/kanap/index.html',
    repoUrl: 'https://github.com/Poomcha/kanap',
    imgMinSrc: '/images/projects_logo/kanap_min.webp',
    imgMinAlt: 'Kanap Logo',
    imgSrc: '/images/projects/kanap.webp',
    imgAlt: {
      fr: "Capture d'écran site Kanap.",
      en: 'Kanap website screenshot.',
    },
    shortDescription: {
      fr: 'Application e-commerce avec appels API.',
      en: 'E-shop application with API calls.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: true,
    tech: ['html', 'css', 'js'],
  },
  // La chouette agence
  {
    name: {
      fr: 'La Chouette Agence',
      en: 'La Chouette Agence',
    },
    shortName: 'la-chouette-agence',
    ghPagesUrl: 'https://poomcha.github.io/la-chouette-agence/',
    repoUrl: 'https://github.com/Poomcha/la-chouette-agence',
    imgMinSrc: '/images/projects_logo/la_chouette_agence_min.webp',
    imgMinAlt: 'La Chouette Agence Logo',
    imgSrc: '/images/projects/la-chouette-agence.webp',
    imgAlt: {
      fr: "Capture d'écran site La Chouette Agence.",
      en: 'La Chouette Agence website screenshot.',
    },
    shortDescription: {
      fr: "Amélioration du SEO d'un site déjà existant.",
      en: 'SEO improvment of an existing website.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: true,
    tech: ['html', 'css'],
  },
  // Ohmyfood
  {
    name: {
      fr: 'Ohmyfood',
      en: 'Ohmyfood',
    },
    shortName: 'ohmyfood',
    ghPagesUrl: 'https://poomcha.github.io/ohmyfood/',
    repoUrl: 'https://github.com/Poomcha/ohmyfood',
    imgMinSrc: '/images/projects_logo/ohmyfood_min.webp',
    imgMinAlt: 'Ohmyfood Logo',
    imgSrc: '/images/projects/ohmyfood.webp',
    imgAlt: {
      fr: "Capture d'écran site Ohmyfood.",
      en: 'Ohmyfood website screenshot.',
    },
    shortDescription: {
      fr: 'Application de réservation de plats, intégré en HTML et SCSS.',
      en: 'Foodtech application, implemented with HTML and SCSS.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: true,
    tech: ['html', 'css', 'sass'],
  },
  // Interactive Rating Component
  {
    name: {
      fr: 'Composant de notation',
      en: 'Rating component',
    },
    shortName: 'interactive-rating-component',
    ghPagesUrl:
      'https://poomcha.github.io/frontendmentor-interactiveratingcomponent/',
    repoUrl:
      'https://github.com/Poomcha/frontendmentor-interactiveratingcomponent',
    imgMinSrc: '/images/projects_logo/interactive_rating_component_min.webp',
    imgMinAlt: 'Interactive Rating Component Logo',
    imgSrc: '/images/projects/interactive_rating_component.webp',
    imgAlt: {
      fr: "Capture d'écran du composant intéractif de notation.",
      en: 'Interactive rating component screenshot.',
    },
    shortDescription: {
      fr: 'Un composant de notation sympa, intégré avec Vue.js.',
      en: 'A nice rating component, implemented with Vue.js.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: true,
    tech: ['html', 'css', 'sass', 'vue', 'js'],
  },
  // Reservia
  {
    name: {
      fr: 'Reservia',
      en: 'Reservia',
    },
    shortName: 'reservia',
    ghPagesUrl: 'https://poomcha.github.io/reservia/',
    repoUrl: 'https://github.com/Poomcha/reservia',
    imgMinSrc: '/images/projects_logo/reservia_min.webp',
    imgMinAlt: 'Reservia Logo',
    imgSrc: '/images/projects/reservia.webp',
    imgAlt: {
      fr: "Capture d'écran site Reservia.",
      en: 'Reservia website screenshot.',
    },
    shortDescription: {
      fr: "Intégration d'une maquette de site de voyage en HTML and CSS.",
      en: 'A static trip reservation website with HTML and CSS.',
    },
    description: {
      fr: '',
      en: '',
    },
    liveVersion: true,
    tech: ['html', 'css'],
  },
];

export default projects;
