/* ===== DONNÉES ET CONFIGURATION ===== */
// Tableau unique contenant tous les projets (Vidéos, 3D, Photos)
const projects = [
  {
    id: 0,
    title: 'Réel explication processus dessin',
    desc: 'Vidéo courte destinée aux réseaux sociaux, expliquant de façon dynamique le processus de création d\'une miniature youtube.',
    category: 'Vidéos',
    type: 'video',
    url: 'https://youtu.be/TIMELAPSE_VIDEO_ID',
    tools: ['Fresco', 'Premiere Pro', 'After Effects', 'Sony A6700'],
    skills: [
      { name: 'Rédaction', level: 95 },
      { name: 'Montage', level: 85 },
      { name: 'Animation 3D', level: 75 }
    ],
    context: 'Suite à la création de multiples miniatures, je me suis dit qu\'il serait intéressant de montrer mon processus créatif. J\'ai donc décider de faire un réel professionnel avec script et montage dynamique. J\'y donne des conseils et par la même occasion, ce réel me permet de me lancer de façon plus sérieuse dans la création de contenu sur les réseaux sociaux, chose importante pour valoriser mon art. ',
    mission: 'Concevoir une vidéo courte et dynamique expliquant les étapes de création d\'un dessin, du croquis à la colorisation.',
    missions: [
      'Rédaction du script (parole et annotations pour le tournage et le montage',
      'Réserver le matériel nécessaire puis le mettre en place (lumières, caméra, micro)',
      'Filmer la face caméra et les plans de coupe',
      'Montage bout-à-bout puis ajout de transitions et sound effect',
      'Réalisation animation sur After Effects puis incorporation dans la vidéo',
      'Étalonnage colorimétrique',
      'Mixage sonore'
    ]
  },
  {
    id: 6,
    title: 'Moment de vie : escapade à la plage',
    category: 'Vidéos',
    desc: 'Premier épisode d\'une série de vidéo contemplative capturant des instants de vie simples et paisibles.',
    type: 'video',
    url: 'https://youtu.be/Rc0gLnFeiZg',
    tools: ['Premiere Pro', 'Iphone 12', 'App Blackmagic Cam'],
    skills: [
      { name: 'Réglage application', level: 70 },
      { name: 'Filmer plans', level: 80 },
      { name: 'Montage', level: 85 }
    ],
    context: 'Lors d\'une journée dans ma ville étudiante, j\'ai eu l\'envie de créer une vidéo poétique. J\'ai alors proposé à ma meilleure amie d\'être figurante dans cette vidéo. Ce projet m\'a permis d\'améliorer mes compétences en vidéo et de créer un beau souvenir avec mon amie. Cette vidéo est donc plutot personnelle et malgré qu\'elle soit assez simple, elle m\'a permis d\'acquérir les bases sur premiere pro en total autonomie (compétences que j\'ai améliorées par la suite avec le montage de mon documentaire sur la médiation équine).',
    mission: 'Actrice et réalisatrice et productrice d\'une vidéo courte poétique.',
    missions: [
      'Observation et captation de plans spontanés : différents types de plans (fixe, large, serrés, ...), paysages et humains (différentes façons filmer en fonction du sujet: centré, secondaire)',
      'Sélection des meilleurs instants puis bout-à-bout pour créer une narration cohérente',
      'Montage au rythme de la musique avec des cuts sur les temps',
      'Création d\'une miniature simple et épurée.'
    ]
  },
  {
    id: 9,
    title: 'Pub DJ MIX',
    category: 'Vidéos',
    desc: 'Réalisation d\'une publicité dynamique pour un batteur électrique (Atelier CréaSim).',
    type: 'video',
    url: 'https://youtu.be/lsitDp9ZHP8',
    tools: ['DaVinci Resolve', 'After Effects', 'Blackmagic', 'Iphone 15 pro'],
    skills: [
      { name: 'Ecriture', level: 85 },
      { name: 'Réalisation', level: 85 },
      { name: 'Doublage', level: 50 },
      { name: 'Montage', level: 90 },
      { name: 'Colorimétrie', level: 75 }
    ],
    context: 'Dans le cadre de ma première année d\'étude en BUT MMI, nous avons eu à réaliser une publicité sur un produit imposé. Ce projet était en rapport avec l\'atelier CréaSim où nous devions trouver la meilleure stratégie marketing possible pour vendre le plus de batteurs électriques possible. Par la suite, nous avons eu à réaliser une pub en adéquation avec notre positionnement et nos valeurs. ',
    mission: 'Réaliser une pub pour un batteur électrique et créer une image autours de lui.',
    missions: [
      'Réalisation de l\'activité CréaSim puis choix des valeurs et du positionnement. ',
      'Écriture du scénario, du script, du storyboard (choix des plans) et de la shotlist (orgainsiation de la captation).',
      'Organisation du tournage (trouver les lieux, casting, choix et réservation dumatériel)',
      'Captation des images et du son (sur le plateau et doublage)',
      'Dérushage et montage narratif',
      'Animation 3D sur After Effect',
      'Étalonnage et mixage sonore',
      'Création d\'une miniature simple et épurée.'
    ]
  },
  {
    id: 10,
    title: 'Dessin communication Galian (interne et externe)',
    category: 'Dessin/3D',
    desc: 'Création de contenus visuels et éditoriaux pour les réseaux sociaux de l\'entreprise Galian.',
    type: 'gallery',
    gallery: [
      'img/starterpack-galian.jpg',
      'img/Dessin1-2-3.webp',
    ],
    tools: ['Fresco', 'Photoshop'],
    skills: [
      { name: 'Dessin', level: 80 },
      { name: 'Graphisme', level: 85 },
    ],
    context: 'Afin d\'améliorer mes compétences en graphisme et en communication, j\'ai réalisé une mission en freelance pour l\'entreprise Galian pour leur créer une série de dessins. J\'ai ainsi participé à la confection d\'un post linkedin surfant sur une tendance promouvant l\'utilisation modéré de l\'IA dans le monde du dessin. J\'ai également participé à la création d\'un décor d\'une série de vidéo, où on peut voir mes dessins (représentant les membres de l\'équipe) en arrière plan. ',
    mission: 'Dynamiser par mes dessins la présence de Galian sur les réseaux sociaux.',
    missions: [
      'Discution avec le client pour comprendre ses besoins et ses attentes.',
      'Veille concurrentielle (regarder autres dessins de la tendance, inspiration autres dessinateurs) et choix des éléments à représenter.',
      'Création de visuels respectant la charte graphique et envoie de la V1',
      'Correction par rapport aux retours et modifications post-production (réglages, ajout de fonds)',
      'Envoi des visuels au client et recueil de son avis',
      'Analyse des retours et de l\'engagement'
    ]
  },
  {
    id: 11,
    title: 'Organisation remise des diplômes 2025 (co-cheffe de projet)',
    category: 'Communication/Gestion de projet',
    desc: 'Organisation complète de la cérémonie de remise des diplômes à l\'IUT de Lannion.',
    type: 'gallery',
    gallery: [
      'img/diplome2.jpg',
      'img/diplome1.jpg',
      'img/diplome3.jpg',
      'img/diplome4.jpg',
      'img/GANTT.png',
    ],
    tools: ['Microsoft Excel', 'Google doc', 'Illustrator'],
    skills: [
      { name: 'Gestion de projet', level: 90 },
      { name: 'Événementiel', level: 85 },
      { name: 'Communication interne et externe', level: 80 },
      { name: 'Création graphique', level: 85 }
    ],
    context: `A partir d'une initiative personnelle, j'ai co-organisé la cérémonie de remise des diplômes 2025 de l'IUT de Lannion. Ayant été simple bénévole l'année d'avant, j'avais envie d'être au coeur du processus. J'ai alors planifié, dirigé les équipes et coordonné l'ensemble de l'événement.`,
    mission: 'Piloter l\'organisation d\'un événement majeur réunissant étudiants, professeurs et partenaires institutionnels.',
    missions: [
      'Brainstorming: lister les idées et les tâches à faire',
      'Prise de contact avec les professeurs qui seront présent (et veulent participer) et avec les anciens étudiants. ',
      'Coordination de l\'équipe projet : création d\'un planning GANTT, lister les tâches à faire (en fonction des pôles). ',
      'Gestion du budget et des prestataires (recherche de sponsors et de fonds, réservation du buffet auprès d\'un traiteur)',
      'Réalisation d\'une charte graphique et du logo/mascotte de la remise des diplômes',
      'Conception de la décoration et de l\'ambiance de la salle (achat matériel et conception manuelles)',
      'Relations avec les institutions et communication autour de l\'événement',
      'Test la veille et supervision du bon déroulé le jour J',
      'Maître de cérémonie',
    ]
  },
  {
    id: 12,
    title: 'Création d\'un média web ',
    category: 'Communication/Gestion de projet',
    desc: 'Projet de publication web et réseaux sociaux via la création d\'un univers thématique et visuel.',
    type: 'gallery',
    gallery: [
      'img/Mon poste 1.png',
      'img/Mon poste 3.png',
      'img/Post de présentation 1.png',
      'img/Post de présentation 3.png',
      'img/Article 2.jpg',
      'img/identité visuelle.png',
    ],
    tools: ['Figma', 'Photoshop', 'Instagram', 'Odoo'],
    instagram: 'https://www.instagram.com/lavoix._off?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    skills: [
      { name: 'Stratégie réseaux social et web', level: 85 },
      { name: 'Création d\'un univers', level: 90 },
      { name: 'Création de posts et d\' articles', level: 85 },
      { name: 'Publier sur le web et les réseaux sociaux', level: 80 }
    ],
    context: `Dans le cadre de mes études, nous avions à réaliser un projet de publication web et réseaux sociaux. Le média en ligne que nous avions crée avait pour thème le cinéma. Notre concept était de présenter, au travers d’une série d’articles et de posts au format court, des femmes dans l’industrie du cinéma. Nous les mettions en lumière en les présentant elles et leurs œuvres majeures.`,
    mission: 'Créer une série de posts et d\'articles sur instagram et Odoo pour enrichir le média en ligne que nous avions crée au préalable.',
    missions: [
      'Brainstorming: lister les idées de contenus et les thèmes',
      'Création d\'un univers (thèmes, valeurs, objectif) et d\'une identité visuelle',
      'Mise en place d\'une stratégie réseaux social (cibles, plateformes, cadences, formats, etc) et web.',
      'Création du compte instagram et du site odoo (mise en forme)',
      'Rédaction d\'articles (deux articles: ton et style éditorial défini auparavant) et création de post instagram (un introductif puis deux autres promouvant les articles) en utilisant le principe de carrousel. ',
      'Promotion des articles et des posts sur la story instagram.',
    ]
  },
  {
    id: 1,
    title: 'Scène 3D d\'un bar ambiance PS2',
    desc: 'Scène 3D immersive avec ambiance musicale libre et rendu 360°.',
    category: 'Dessin/3D',
    type: 'mp4',
    url: 'Rendu_infographie_3D.mp4',
    tools: ['Blender'],
    skills: [
      { name: 'Modélisation 3D', level: 80 },
      { name: 'Texturing et matériaux', level: 75 },
      { name: 'Agencement lumière', level: 85 },
    ],
    context: 'Dans un cadre personnel, en parallèle de mes cours de 3D, j\’ai décidé d\’approfondir mes compétences en la matière en réalisant une scène 3D immersive représentant un bar de nuit avec une ambiance de jeu PS2. Mon objectif était de créer un maximum de détails et de n\'utiliser aucuns models, de tout modéliser à la main, des plus grands au plus petits éléments. Pour se faire, j\'ai du jouer avec les différentes formes, textures et noeuds pour mener à ce résultat.',
    mission: 'Créer une scène 3D immersive complète, en modélisant chaque élément à la main pour capturer une esthétique rétro PS2.',
    missions: [
      'Recherche visuelle et inspiration pour relier le projet à mon univers.',
      'Choix des éléments principaux à modéliser (bar, banquettes,...) puis création de ces derniers en utilisant les différents outils formes et outils de déformation.',
      'Création des éléments secondaires (verre, cendriers, affiches,...) accompagné du même processus de création.',
      'Recherche et ajout de textures et de noeuds pour donner reliefs et réalisme aux éléments.',
      'Composition de lumières pour créer une ambiance cohérente avec mon univers. Création de néons avec l\'outil de couleur "émission" disposition de spots lumineux.',
      'Placement de la caméra pour la vidéo 360° et pour les différents angles photos.',
      'Rendu optimisé image par image puis editing video directement dans blender.',
    ]
  },
  {
    id: 2,
    title: 'Documentaire "Médiation équine, le lien du vivant"',
    category: 'Vidéos',
    desc: 'Documentaire sur le lien profond entre l\'humain et l\'animal - exemple de la médiation animale.',
    type: 'video',
    url: 'https://youtu.be/6o7y5Bvr9J0',
    tools: ['Premiere Pro', 'Audition'],
    skills: [
      { name: 'Montage vidéo', level: 90 },
      { name: 'Sound design', level: 75 },
      { name: 'Colorimétrie', level: 65 },
      { name: 'Tournage', level: 85 }
    ],
    context: 'Documentaire réalisé dans le cadre d\'une ressource en deuxième année de BUT MMI à l\'IUT de Lannion. En binôme, nous avions à réaliser un court documentaire sur une initiative locale. Ce documentaire nous a permis d\' explorer le lien profond entre l\'humain et l\'animal au travers de témoignages, d\'images capturées sur le terrain et d\'interviews plus profondes où nous avons pu mieux comprendre en quoi consiste l\'activité et en quoi elle aide les personnes en difficulté.',
    award: 'Premier prix du public 🏆',
    mission: 'Ecrire, réaliser et produire un documentaire professionnel de 2 minutes mettant en lumière l\'impact de la médiation équine.',
    missions: [
      'Recherche du sujet de notre documentaire puis contact des associations locales qui nous intéressent.',
      'Préparation du dossier de tournage avec note d\'intention et de traitement, liste du matériel et liste des questions à poser aux interviewés.',
      'Louer matériel auprès de l\'IUT (Blackmagic, micros DJI, flashs lumineux, trépieds)',
      'Première interview en extérieur: récupérer matériel et le mettre en place, filmer interview et plans de coupes. Même système pour la deuxième interview.',
      'Dérusher et cuter les interviews. Récupérer les plans de coupes nécessaires',
      'Premier bou-à-bout terminé avec plans de coupes insérés.',
      'Raccourcir le film pour le rentrer dans le temps imparti(2min). Et fair une transition pour les voix.',
      'Ajout de musique et de sound design',
      'Étalonnage colorimétrique en adéquation avec l\'ambiance du documentaire (tons clairs).',
      'Ajout de panneaux de début (titre) et de fin (crédits) ainsi que des panneaux pour les prénoms des interviewés.',
      'Création d\'une miniature simple et épurée.'
    ]
  },
  {
    id: 3,
    category: 'Vidéos',
    title: 'Souvenirs débloqués: Nostalgie par la musique',
    desc: 'Vidéo musicale explorant le thème de la nostalgie à travers une composition originale.',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_NOSTALGIA',
    tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    skills: [
      { name: 'Montage vidéo', level: 85 },
      { name: 'Motion design', level: 80 },
      { name: 'Synchronisation musicale', level: 90 }
    ],
    context: 'Création d\'une vidéo musicale sur le thème de la nostalgie. Utilisation de visuels évocateurs et d\'une bande sonore libre de droits synchronisée avec les mouvements pour créer une atmosphère émouvante.',
    mission: 'Produire une vidéo musicale explorant les émotions liées à la nostalgie à travers un montage rythmé.',
    missions: [
      'Recherche de visuels et musique libre',
      'Création du concept visuel',
      'Montage image par image',
      'Motion design des transitions',
      'Synchronisation musicale précise',
      'Étalonnage colorimétrique'
    ]
  },
  {
    id: 4,
    title: 'Création de miniatures YouTube',
    desc: 'Design et création de miniatures accrocheuses pour la chaîne YouTube Awenzer.',
    category: 'Dessin/3D',
    type: 'gallery',
    gallery: [
      'img/Minia-video-cas(full).webp',
      'img/pretty_dollcorpse.webp',
      'img/Miniature_vald_ytb_vers.webp',
      'img/Miniature_theodora.webp'
    ],
    tools: ['Fresco', 'Photoshop'],
    skills: [
      { name: 'Graphisme', level: 90 },
      { name: 'Retouche photo', level: 60 }
    ],
    context: 'Voulant améliorer mes compétences en graphisme et en dessin digital, j\'ai saisi l\'opportunité qui m\'a été proposé, de créer des miniatures pour la chaîne YouTube Awenzer. Mon objectif est de créer des miniatures de niveau professionnel et au visuel accrocheur pour optimiser le taux de clic (CTR) des vidéos. Chaque miniature est conçue pour capturer l\'attention du public et représenter au mieux l\'univers et le contenu de la vidéo de façon claire et attrayante. Je fais en sorte que les dessins soient au centre de l\'attention en agrémentant parfois d\'un texte que je mettrais alors en arrière plan. Au fur et à mesure des vidéos, je me pousse à m\'améliorer et à sortir de ma zone de confort.',
    mission: 'Concevoir des identités visuelles fortes pour des vidéos YouTube afin d\'attirer l\'œil et d\'augmenter l\'engagement.',
    missions: [
      'Analyse du sujet de la vidéo: le contexte, le public, le thème, le style, le message. Si c\'est sur un album, j\'écoute l\'album en entier pour m\'imprégner des thèmes et du message que passe l\'artiste par exemple.',
      'Discussion avec le créateur de contenu sur son idée (plus ou moins précise, voir ce qui est réalisable) et recherche d\'inspirations (veille sur les réseaux sociaux, autres créateurs, différentes formes d\'art).',
      'recherche d\'un concept visuel précis qui aboutti à la création d\'un croquis papier que je vais faire valider par le créateur de contenu.',
      'Transmettre photo croquis papier sur la tablette graphique et réalisation d\'une V1 sans couleur, avec les traits principaux que je vais faire valider.',
      'Mise en couleur de la bonne version en mélangeant différentes techniques (vectorielle et au pinceau)',
      'Création d\'un fond avec des pinceaux FX (fumée, ombres, étoiles, taches)',
      'Rajout de texte et/ou de textures pour habiller d\'avantage la miniature',
      'Mise sur Youtube, possibilité de mettre maximum trois miniatures par vidéo, donc je peux réaliser de légères déclinaisons pour une même miniature de vidéo (en faisant des zooms, rotations, changements de couleurs, etc.)'
    ]
  },

  {
    id: 5,
    title: 'Timeless illusion (Court métrage)',
    category: 'Vidéos',
    desc: 'Réalisation d\'un court-métrage de fiction explorant une narration visuelle forte.',
    type: 'video',
    url: 'https://youtu.be/hfGkN5a40_A',
    tools: ['Premiere Pro', 'After Effects', 'Sony A6700'],
    skills: [
      { name: 'Réalisation', level: 85 },
      { name: 'Montage', level: 90 },
      { name: 'Direction d\'acteur', level: 75 }
    ],
    context: 'Projet réalisé dans le cadre de mes études ou d\'un projet personnel, visant à raconter une histoire courte avec une attention particulière portée à l\'image et au rythme.',
    mission: 'Réaliser une fiction courte captivante, de la phase d\'écriture jusqu\'au montage final.',
    missions: [
      'Écriture du scénario et du storyboard',
      'Organisation du tournage (lieux, casting, matériel)',
      'Captation des images et du son',
      'Dérushage et montage narratif',
      'Étalonnage et mixage sonore',
      'Création d\'une miniature simple et épurée.'
    ]
  },
  {
    category: 'Photos/Graphisme',
    id: 7,
    title: 'Bon baisers de Paris (Meilleurs voeux 2026)',
    desc: 'Série photographique revisitant les codes de la carte postale parisienne.',
    type: 'gallery',
    gallery: [
      "img/la santé.webp",
      "img/à l'abondance.webp",
      "img/les terrasses.webp",
      "img/la poisonnerie.webp",
      "img/l'érudit.webp",
      "img/amour en cage.webp",
      "img/les sappes.webp",
      "img/chill.jpg",
      "img/love.webp"
    ],
    tools: [
      'Sony A6700',
      'Camera Raw Adobe',
      'Photoshop'
    ],
    skills: [
      { name: 'Paramétrer appareil photo', level: 50 },
      { name: 'Retouche photo raw', level: 70 },
      { name: 'Graphisme', level: 80 },
      { name: 'Création d\'un univers', level: 90 }
    ],
    context: 'Ce projet commenca à Paris, lors d\'un week-end en amoureux à la période de noël. J\'avais très envie de faire une exposition de photo et c\'était avec cette idée qu\'on se rendis au musée d\'art moderne. Arrivé là-bas, nous nous rendîmes compte que l\'entrée n\'était pas gratuite, alors en bon étudiant fauché que nous sommes, nous décidâmes s\'implement de regarder ce que pouvait combler la boutique souvenir dans notre besoin de voir de l\'art. Nous nous approchâmes du stand de carte postal et nous remarquâmes quelques unes bien kitch. Nous vint alors l\'idée de faire la même chose avec nos propres photos, jouer avec ces clichés tout en leur apportant notre patte et notre angle artistique. Finalement, je me chargea de toute la partie graphisme mais je tiens à remercier Awen, pour les quelques photos qu\'il a pris. La plupart ont été prise lors de notre assension de Montmartre, un lundi matin pluvieux où nous avons failli perdre nos mains, mordues par le froid.',
    mission: 'Créer une série photographique décalée et artistique revisitant les codes de la carte postale parisienne.',
    missions: [
      'Prendre les photos (en argentique et numérique)',
      'Inspiration puis recherches visuelles (typographies, couleurs, textures, effets)',
      'Création d\'un univers visuel : jouer avec les codes du kitch et le remettre au goût du jour tout en y ajoutant une touche de second degré (voir photo : "la santé"). Certaines compositions ont une ambiance assez rêveuses tandis que d\'autres sont plus décalées.',
      'Post-production : retouche photo (raw et argentique) puis création graphique (ajout effet, mise en lumière, textures, textes) ',
    ]
  },
  {
    category: 'Photos/Graphisme',
    id: 8,
    title: 'Plus à venir',
    desc: 'D\'autres projets arrivent prochainement. Consultez régulièrement cette page !',
    type: 'mp4',
    url: '',
    tools: ['À venir'],
    skills: [
      { name: 'À venir', level: 0 }
    ],
    context: 'Portfolio en expansion. De nouveaux projets seront ajoutés régulièrement pour montrer l\'évolution de mon travail.',
    mission: 'Continuer à enrichir ce portfolio avec de nouvelles réalisations.',
    missions: [
      'Actualisation régulière du portfolio',
      'Ajout de nouveaux projets',
      'Mise à jour des compétences'
    ]
  }
];

/* ===== SLIDER (HERO) ===== */
const slides = [
  {
    title: '"Il était trop petit pour comprendre"',
    desc: 'Chaîne youtube : Awenzer',
    image: 'img/pretty_dollcorpse.webp',
    alt: 'Miniature pour la vidéo youtube : "Il était trop petit pour comprendre"'
  },
  {
    title: '"Guérir dune rupture amoureuse"',
    desc: 'Chaîne youtube : Awenzer',
    image: 'img/Minia-video-cas(full).webp',
    alt: 'Miniature pour la vidéo youtube : "Guérir dune rupture amoureuse"'
  },
  {
    title: '"L\'horreur que cache l\'univers de Vald"',
    desc: 'Chaîne youtube : Awenzer',
    image: 'img/Miniature_vald_ytb_vers.webp',
    alt: 'Miniature pour la vidéo youtube : "Vald"'
  },
  {
    title: '"8 chansons qui vont TE faire culpabiliser"',
    desc: 'Chaîne youtube : Awenzer',
    image: 'img/Miniature_theodora.webp',
    alt: 'Miniature pour la vidéo youtube : "8 chansons qui vont TE faire culpabiliser"'
  }
];

let currentSlide = 0;
let slideInterval;
const playerTitle = document.getElementById('player-title');
const playerDesc = document.getElementById('player-desc');
const playerImage = document.getElementById('player-image');
const playBtn = document.getElementById('play');

function updateSlide(index) {
  const slide = slides[index];
  if (!slide || !playerTitle) return;

  // Transition fluide de l'image
  if (playerImage) {
    playerImage.classList.remove('active');

    // On attend un cycle de rendu pour changer la source et remettre la classe active
    setTimeout(() => {
      playerImage.src = slide.image;
      playerImage.alt = slide.alt || slide.title;
      playerImage.classList.add('active');
    }, 50);
  }

  playerTitle.textContent = slide.title;
  playerDesc.textContent = slide.desc;

  // Changement subtil de teinte pour chaque slide
  document.documentElement.style.setProperty('--accent', ['#6ac5c0', '#5dd6ff', '#ff2ba3'][index % 3]);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}

function playSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3600);
}

// Initialisation du slider si présent
if (playerTitle) {
  // On s'assure que l'image est prête avant de lancer
  updateSlide(0);
  playSlideshow();
}


/* ===== MODALE UNIFIÉE ===== */
const modal = document.getElementById('case-modal');
const modalTitle = document.getElementById('case-title');
const modalDesc = document.getElementById('case-desc');
const videoWrapper = document.getElementById('case-video-wrapper');
const caseTools = document.getElementById('case-tools');
const caseSkills = document.getElementById('case-skills');
const caseContext = document.getElementById('case-context');
const caseMissionText = document.getElementById('case-mission-text');
const caseMissions = document.getElementById('case-missions');
const closeModalBtns = document.querySelectorAll('[data-close-modal]');
const caseLink = document.getElementById('case-link');

/* Utilitaires */
function formatImageTitle(path) {
  if (!path) return '';
  const filename = path.split('/').pop(); // Récupère le nom du fichier
  // Retire l'extension (tout ce qu'il y a après le dernier point)
  return filename.replace(/\.[^/.]+$/, "");
}

/* Utilitaires YouTube */
function getYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function createYouTubeEmbed(videoId) {
  return `
    <div class="youtube-embed">
      <iframe
        width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
        title="Vidéo YouTube" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen loading="lazy">
      </iframe>
    </div>`;
}

/* Fonction principale d'ouverture de modale */
function openModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project || !modal) return;

  // 1. Remplir les textes
  const eyebrowEle = modal.querySelector('.eyebrow');
  if (eyebrowEle) {
    if (project.award) {
      eyebrowEle.innerHTML = `<span style="background: rgba(255, 215, 0, 0.2); border: 1px solid #ffd700; color: #ffd700; padding: 4px 12px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; font-weight: 700;">🏆 ${project.award}</span>`;
    } else {
      eyebrowEle.textContent = 'Projet phare';
      eyebrowEle.style = ''; // Reset style for normal projects
    }
  }

  // Ajuster la largeur de la modale pour les collections d'images
  const panel = modal.querySelector('.modal__panel');
  if (panel) {
    panel.style.maxWidth = (project.type === 'gallery' && project.gallery?.length > 3) ? '1200px' : '900px';
  }

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.desc;
  if (caseContext) caseContext.textContent = project.context || '';
  if (caseMissionText) caseMissionText.textContent = project.mission || '';

  // Gestion du lien Instagram / Externe
  if (caseLink) {
    caseLink.innerHTML = project.instagram
      ? `<a href="${project.instagram}" target="_blank" class="btn solid" style="width: 100%; justify-content: center; gap: 8px;">Voir sur Instagram</a>`
      : '';
  }

  // 2. Remplir les listes (Outils, Compétences, Missions)
  if (caseTools) caseTools.innerHTML = (project.tools || []).map(t => `<span class="pill">${t}</span>`).join('');

  if (caseSkills) {
    caseSkills.innerHTML = (project.skills || []).map(s => `
      <div class="skill">
        <span>${s.name}</span>
        <div class="meter"><span style="width: ${s.level}%;"></span></div>
      </div>`).join('');
  }

  if (caseMissions) {
    caseMissions.innerHTML = (project.missions || []).map(m => `<li>${m}</li>`).join('');
  }

  // 3. Gérer le média (Vidéo, MP4, Galerie)
  if (videoWrapper) {
    videoWrapper.innerHTML = ''; // Reset

    if (project.type === 'video' && project.url) {
      const videoId = getYouTubeId(project.url);
      if (videoId) videoWrapper.innerHTML = createYouTubeEmbed(videoId);
    }
    else if (project.type === 'mp4' && project.url) {
      videoWrapper.innerHTML = `
          <video src="${project.url}" controls class="feature__modal-video" preload="metadata">
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>`;
    }
    else if (project.type === 'gallery' && project.gallery?.length) {
      // Carrousel Harmonieux (Tous les projets Galerie)
      videoWrapper.innerHTML = `
        <div class="case__carousel" id="project-carousel">
          <div class="case__carousel-viewer">
            ${project.gallery.map((img, idx) => `
              <img src="${img}" class="case__carousel-img js-magnify ${idx === 0 ? 'active' : ''}" data-index="${idx}" />
            `).join('')}
          </div>
          <p class="case__carousel-title">${formatImageTitle(project.gallery[0])}</p>
          <div class="case__carousel-nav">
             <button class="case__carousel-btn prev-btn" aria-label="Précédent">&#10094;</button>
             <button class="case__carousel-btn next-btn" aria-label="Suivant">&#10095;</button>
          </div>
          <div class="case__carousel-dots">
            ${project.gallery.map((_, idx) => `
              <div class="case__carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
            `).join('')}
          </div>
        </div>`;

      let currentIdx = 0;
      const images = videoWrapper.querySelectorAll('.case__carousel-img');
      const dots = videoWrapper.querySelectorAll('.case__carousel-dot');
      const nextBtn = videoWrapper.querySelector('.next-btn');
      const prevBtn = videoWrapper.querySelector('.prev-btn');

      const updateCarousel = (newIdx) => {
        images[currentIdx].classList.remove('active');
        dots[currentIdx].classList.remove('active');
        currentIdx = (newIdx + project.gallery.length) % project.gallery.length;
        images[currentIdx].classList.add('active');
        dots[currentIdx].classList.add('active');

        const titleEl = videoWrapper.querySelector('.case__carousel-title');
        if (titleEl) {
          titleEl.textContent = formatImageTitle(project.gallery[currentIdx]);
        }
      };

      if (nextBtn) nextBtn.onclick = () => updateCarousel(currentIdx + 1);
      if (prevBtn) prevBtn.onclick = () => updateCarousel(currentIdx - 1);
      dots.forEach(dot => {
        dot.onclick = () => updateCarousel(parseInt(dot.dataset.index));
      });
    }

    // Attacher l'événement d'agrandissement aux images
    videoWrapper.querySelectorAll('.js-magnify').forEach((img, idx) => {
      img.onclick = () => openLightbox(idx, project.gallery);
    });
  }

  // 4. Afficher
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (videoWrapper) videoWrapper.innerHTML = '';
}

/* Event Listeners pour la fermeture */
closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal?.hidden) closeModal();
});

/* ===== INITIALISATION AUTO ===== */
function initProjects() {
  const projectsContainer = document.getElementById('projects-container');
  if (!projectsContainer) return;

  const categories = { 'Vidéos': [], 'Dessin/3D': [], 'Photos/Graphisme': [], 'Communication/Gestion de projet': [] };

  // Trier les projets dans les catégories
  projects.forEach(p => {
    if (categories[p.category]) categories[p.category].push(p);
    else categories['Vidéos'].push(p); // Fallback
  });

  let html = '';
  for (const [catName, catProjects] of Object.entries(categories)) {
    if (catProjects.length === 0) continue;
    html += `
      <section class="category-section">
        <h2 class="category-title">${catName}</h2>
        <div class="grid">
          ${catProjects.map(p => {
      let bgImage = '';
      if (p.type === 'video' && p.url) {
        const vidId = getYouTubeId(p.url);
        if (vidId) bgImage = `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;
      } else if (p.type === 'gallery' && p.gallery && p.gallery.length > 0) {
        bgImage = p.gallery[0];
      } else if (p.type === 'mp4' && p.image) {
        bgImage = p.image;
      }

      const style = bgImage ? `style="--bg-image: url('${bgImage}')"` : '';

      return `
            <button class="grid__cell js-open-project reveal" type="button" data-id="${p.id}" ${style}>
              ${p.title}
            </button>
          `}).join('')}
        </div>
      </section>`;
  }
  projectsContainer.innerHTML = html;
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectSections = document.querySelectorAll('.category-section');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectSections.forEach(section => {
        const sectionTitle = section.querySelector('.category-title')?.textContent;
        if (filterValue === 'all' || sectionTitle === filterValue) {
          section.style.display = '';
          section.style.animation = 'modalFadeIn 0.4s ease-out';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
}

function initModalTriggers() {
  document.querySelectorAll('.js-open-case, .js-open-project, .js-feature-main, .js-open-feature-modal').forEach(el => {
    el.addEventListener('click', (e) => {
      let id = el.dataset.id || el.dataset.projectId;

      // Fallbacks pour elements sans ID data attribué dans legacy html
      if (!id && el.classList.contains('js-open-feature-modal')) id = 1;
      if (!id && el.classList.contains('js-feature-main')) id = 1;

      if (id !== undefined) {
        e.preventDefault();
        openModal(parseInt(id));
      }
    });

    // Génération thumbnail
    if (el.classList.contains('card') && !el.querySelector('img')) {
      const id = el.dataset.projectId;
      const project = projects.find(p => p.id == id);
      if (project?.url && project.type === 'video') {
        const vidId = getYouTubeId(project.url);
        if (vidId) {
          const thumbUrl = `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;
          const mediaDiv = el.querySelector('.card__media');
          if (mediaDiv) {
            mediaDiv.innerHTML = `<img src="${thumbUrl}" class="card__thumbnail" loading="lazy" />`;
          }
        }
      }
    }
  });
}

function init() {
  initProjects();
  initFilters();
  initModalTriggers();
}

// Lancer au chargement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init();
    initScrollReveal();
  });
} else {
  init();
  initScrollReveal();
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    // Ne garder que les éléments visibles pour préparer l'apparition en cascade
    const intersectingEntries = entries.filter(entry => entry.isIntersecting);
    
    intersectingEntries.forEach((entry, index) => {
      // Ajout d'un délai progressif pour simuler l'apparition au fur et à mesure (staggering)
      setTimeout(() => {
        entry.target.classList.add('active');
      }, index * 100);
      
      // On arrête d'observer une fois l'élément révélé pour améliorer les performances
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ===== LIGHTBOX LOGIC ===== */
const lightbox = document.getElementById('fullscreen-overlay');
const lightboxImg = document.getElementById('fullscreen-img');
let lightboxGallery = [];
let currentLightboxIdx = 0;

function openLightbox(index, gallery) {
  if (!lightbox || !lightboxImg) return;
  lightboxGallery = gallery;
  currentLightboxIdx = index;
  updateLightbox();
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
}

function updateLightbox() {
  if (!lightboxImg || !lightboxGallery[currentLightboxIdx]) return;
  lightboxImg.style.opacity = '0';
  setTimeout(() => {
    lightboxImg.src = lightboxGallery[currentLightboxIdx];
    lightboxImg.style.opacity = '1';
  }, 200);
}

function nextLightbox(e) {
  if (e) e.stopPropagation();
  currentLightboxIdx = (currentLightboxIdx + 1) % lightboxGallery.length;
  updateLightbox();
}

function prevLightbox(e) {
  if (e) e.stopPropagation();
  currentLightboxIdx = (currentLightboxIdx - 1 + lightboxGallery.length) % lightboxGallery.length;
  updateLightbox();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
}

if (lightbox) {
  // Navigation au clic (sauf sur l'image elle-même pour fermer)
  lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target.classList.contains('fullscreen-close')) {
      closeLightbox();
    }
  };

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });
}
