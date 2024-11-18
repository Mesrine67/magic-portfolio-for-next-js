import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Mike',
    lastName:  'Martini',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/France',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Français']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Abonnez-vous à la newsletter de {person.firstName}</>,
    description: <>J'écris occasionnellement sur le design, la technologie et je partage des réflexions sur l'intersection entre créativité et ingénierie.</>
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Mesrine67',
    },
    // {
    //     name: 'LinkedIn',
    //     icon: 'linkedin',
    //     link: 'https://www.linkedin.com/company/once-ui/',
    // },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mike.martini.67@proton.me',
    },
]

const home = {
    label: 'Accueil',
    title: `Portfolio de ${person.name}`,
    description: `Site web de portfolio présentant mon travail en tant que ${person.role}`,
    headline: <>Ingénieur en design et créateur</>,
    subline: <>Je suis Mike, ingénieur en design chez <InlineCode>FLY</InlineCode>, où je conçois des expériences utilisateur intuitives.<br/> Après le travail, je réalise mes propres projets.</>
};

const about = {
    label: 'À propos',
    title: 'À propos de moi',
    description: `Rencontrez ${person.name}, ${person.role} de ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>${person.name} est un ingénieur en design basé à Jakarta avec une passion pour transformer des défis complexes en solutions de design simples et élégantes. Son travail couvre les interfaces numériques, les expériences interactives et la convergence du design et de la technologie.</>
    },
    work: {
        display: true, // mettre sur false pour cacher cette section
        title: 'Expériences professionnelles',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Présent',
                role: 'Ingénieur en design senior',
                achievements: [
                    <>Refonte de l'UI/UX de la plateforme FLY, entraînant une augmentation de 20 % de l'engagement utilisateur et une réduction de 30 % des temps de chargement.</>,
                    <>Pilotage de l'intégration des outils d'IA dans les flux de travail de conception, permettant aux designers d'itérer 50 % plus rapidement.</>
                ],
                images: [ // optionnel : laissez le tableau vide si vous ne voulez pas afficher d'images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Projet Once UI',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Responsable design',
                achievements: [
                    <>Développement d'un système de design unifié pour la marque sur plusieurs plateformes, améliorant la cohérence du design de 40 %.</>,
                    <>Direction d'une équipe interfonctionnelle pour lancer une nouvelle ligne de produits, contribuant à une augmentation de 15 % des revenus globaux de l'entreprise.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // mettre sur false pour cacher cette section
        title: 'Études',
        institutions: [
            {
                name: 'Université de Jakarta',
                description: <>Études en génie logiciel.</>,
            },
            {
                name: 'Build the Future',
                description: <>Études en marketing en ligne et branding personnel.</>,
            }
        ]
    },
    technical: {
        display: true, // mettre sur false pour cacher cette section
        title: 'Compétences techniques',
        skills: [
            {
                title: 'Figma',
                description: <>Capable de prototyper avec Figma et Once UI à une vitesse impressionnante.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Image de projet',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Image de projet',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Création d'applications nouvelle génération avec Next.js, Once UI et Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Image de projet',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
};
const blog = {
    label: 'Blog',
    title: 'Écrire sur le design et la technologie...',
    description: `Découvrez ce que ${person.name} a récemment partagé`
    // Créez de nouveaux articles de blog en ajoutant un nouveau fichier .mdx dans app/blog/posts
    // Tous les articles seront listés sur la route /blog
}

const work = {
    label: 'Projets',
    title: 'Mes projets',
    description: `Projets de design et développement réalisés par ${person.name}`
    // Créez de nouvelles pages de projet en ajoutant un nouveau fichier .mdx dans app/blog/posts
    // Tous les projets seront listés sur les routes /home et /work
}

const gallery = {
    label: 'Galerie',
    title: 'Ma galerie photo',
    description: `Une collection de photos par ${person.name}`,
    // Images provenant de https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };