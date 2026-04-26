const templeDisclaimer = 'Imágenes utilizadas con autorización de The Church of Jesus Christ of Latter-day Saints, exclusivamente para este portafolio digital y sin implicar aval institucional. ©2019 Intellectual Reserve, Inc. All rights reserved.'

export const projects = [
  {
    slug: 'templo-la-paz',
    legacyPath: '/project-templo-la-paz.html',
    title: 'Templo La Paz',
    location: 'La Paz, Bolivia',
    year: '2024',
    status: 'Proyecto terminado',
    phase: 'Construcción próxima',
    client: 'The Church of Jesus Christ of Latter-day Saints',
    role: 'Diseño arquitectónico, documentación técnica y coordinación BIM',
    category: 'Institucional',
    description:
      'Proyecto institucional de alta complejidad geométrica y coordinación multidisciplinar. Se trabajó con documentación integral y coordinación temprana para asegurar consistencia técnica en obra.',
    legalNote: templeDisclaimer,
  },
  {
    slug: 'templo-santa-cruz',
    legacyPath: '/project-templo-santa-cruz.html',
    title: 'Templo Santa Cruz',
    location: 'Santa Cruz, Bolivia',
    year: '2022',
    status: 'Próximo a entrega',
    client: 'The Church of Jesus Christ of Latter-day Saints',
    role: 'Diseño arquitectónico, documentación técnica y coordinación BIM',
    category: 'Institucional',
    description:
      'Proyecto institucional desarrollado para Santa Cruz, con enfoque en precisión documental, sobriedad formal y coordinación multidisciplinar orientada a su entrega final.',
    legalNote: templeDisclaimer,
  },
  {
    slug: 'centro-social-corporativo-prodimsa',
    legacyPath: '/project-prodimsa.html',
    title: 'Centro Social Corporativo PRODIMSA',
    year: '2018',
    type: 'Corporativo / Sede social',
    status: 'Finalizado',
    role: 'Diseño y construcción',
    description:
      'Diseño y construcción de la sede social de PRODIMSA, concebida con un enfoque integral que combina funcionalidad y bienestar corporativo.',
  },
]

export const featuredProjectSlugs = [
  'templo-la-paz',
  'templo-santa-cruz',
  'centro-social-corporativo-prodimsa',
]

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
