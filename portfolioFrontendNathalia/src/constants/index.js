import React from "react";
import { agile, behanceLogo, design_minded_icon, discordLogo, envelopeIcon, girlDesk3D, githubLogo, sassLogo, cssLogo, htmlLogo, javascriptLogo, linkedInLogo, messageIcon, mongodbLogo, moonIcon, multiculturalIcon, nodejsLogo,  personIcon, profile_bewerbung_foto, reactLogo,typescript_logo, paperplaneIcon, backtoTop, hamburguerMenuIcon, closeIcon, Mlay_Tours_Project, Neuromorphic_music_player, eCommerce_Thumbnail, Animation_puppy } from "../assets";



export const navLinks = [
    {
        id: "home",
        title: "HOME",
    },
    {
        id: "work",
        title: "WORK",
    },
    {
        id: "about",
        title: "ABOUT",
    },
    {
        id: "contact",
        title: "CONTACT",
    }
];

export const features = [
    {
        id: "feature-1",
        icon: agile,
        title: "Agile",
        content: "I am familiar working with Agile framework, involved in the planning and improving the digital interface with each iteration", 
    },
    {
        id: "feature-2",
        icon: design_minded_icon,
        title: "Design-minded",
        content: "The driving aspect for my designs has a start in the consideration of human interaction. I also love to learn about new UX/UI trends", 
    },
    {
        id: "feature-3",
        icon: multiculturalIcon,
        title: "Multicultural",
        content: "I consider myself as an adaptable and open individual, I speak fluent english and german", 
    },
]

export const about = 
    [ 
        {   
            name: "title",
            content:"about",
        },
        {   
            name: "parragraf1",
            content: "Hi there! 👋🏻 , My name is",
        },
        {   
            name: "parragraf2",
            content: "Nathalia Padron.",
        },
        {   
            name: "parragraf3",
            content: " I am originally from Caracas, Venezuela and I am currently based in Stuttgart, since 2016.",
        },
        {   
            name: "parragraf4",
            content: "Before making the leap into",
        },
        {   
            name: "parragraf5",
            content: "Front-end Design",
        },
        {   
            name: "parragraf6",
            content: " I studied",
        },
        {   
            name: "parragraf7",
            content: " Product Design in",
        },
        {   
            name: "parragraf8",
            content: " IDC ( Instituto de Diseno de Caracas )",
        },
        {   
            name: "parragraf9",
            content: " and worked several years as a",
        },
        {   
            name: "parragraf10",
            content: " Grafic Designer",
        },
        {   
            name: "parragraf11",
            content: " in Germany and Venezuela.",
        },
        {   
            name: "parragraf12",
            content: "I feel comfortable working with",
        },
        {   
            name: "parragraf13",
            content: " CSS"
        },
        {   
            name:"parragraf14",
            content:" and",
        },
        {   
            name:"parragraf15",
            content: " Javascript",
        },
        {   
            name: "parragraf16",
            content: " and I continue to learn",
        },
        {   
            name:"parragraf17",
            content:" React.",
        },
        {   
            name: "parragraf18",
            content: "  I would love to extend my skillset to perform tasks related to",
        },
        {   
            name: "parragraf19",
            content: " UX/UI.",
        },
        {   
            name: "parragraf20",
            content: "  Also, I have recently received a certification in MERN Stack and continue to learn and develop my understanding towards the backend.",
        },
        {   
            name: "parragraf21",
            content: "  Recently I have been working with the following", 
        },
        {   
            name: "parragraf22",
            content: " technologie Stack", 
        },

    ]

    export const logos = [
        {
            logo: htmlLogo,
            name:"hmtl",
        },
        {
            logo: cssLogo,
            name:"css",
        },
        {
            logo: javascriptLogo,
            name:"javascript",
        },
        {
            logo: sassLogo,
            name: "sass",
        },
        {
            logo: typescript_logo,
            name: "typescript",
        },
        {
            logo: reactLogo,
            name: "react",
        },
        {
            logo: nodejsLogo,
            name: "nodeJS",
        },
        {
            logo: mongodbLogo,
            name: "mongoDB",
        },
    ]

    export const technologieStack = [
        {
            title1: "Libraries & Frameworks",
            technologies: 
            [
                "Tailwind CSS",
                "Bootstrap",
                "Sass",
                "React",
            ]
        }, 
        {
            title2: "Design Tools",
            technologies: 
            [
                "GoogleFonts",
                "Figma",
                "Canva",
            ]
        },
        {
            title3: "Other Tools",
            technologies: 
            [
                "VS Code",
                "Git + Hub",
                "Azure DevOps",
                "Chrome Dev Tools",
            ]
        },
    ]
        
export const cards = [
    {
        name: "MLAY TOURS",
        content: "A MERN Stack project developed as a last project for a bootcamp I finished at DCI. Worked with a customer and developed brand identity.",
        link: "",
    }
]

export const contactForm = {
    parragraf1: "I'm interested in a position within a team environment in a Web Agency working on large and creative projects.",
    parragraf2: "However, if you have a request or question, don't hesitate to use this form.",
    inputs: [
        {
            name: "Full name",
            icon: personIcon,
        },
        {
            name: "E.g marcsummer@gmail.com",
            icon: envelopeIcon,
        },
        {
            name: "leave me a Message",
            icon: messageIcon,
        },
    ],
    sendbutton: "send",
    icon: paperplaneIcon,
}

export const footer = [
    {
        id: "social-media-1",
        icon: linkedInLogo,
        link: "",
    },
    {
        id: "social-media-2",
        icon: behanceLogo,
        link: "",
    },
    {
        id: "social-media-3",
        icon: githubLogo,
        link: "",
    },
    {
        id: "social-media-4",
        icon: discordLogo,
        link: "",
    },
    {
        id: "goTotop",
        icon: backtoTop,
        link: "",
    },
  ];

export const Projects = [
    {
        id: "1",
        title: "Mlay Tours",
        img: Mlay_Tours_Project,
        url: "https://mlaytours.onrender.com/",
        repo: "https://github.com/Final-Project-Group-4/Backend-Project",
        para: "Mern Stack Project for real life client. The company offers trips in the Region of Tanzania, Afrika. The Project includes: Server Side Programming and language translation support. Wireframes were created in Figma. "
    },
    {
        id: "2",
        title: "Neuromorphic Music Player",
        img: Neuromorphic_music_player,
        url: "https://codepen.io/nattydci/pen/LYeYOGY",
        para: "Small Project showing CSS skills and the use of Neuroformic elements, Click to find a link to my codepen. "
    },
    {
        id:"3",
        title: 'E-commerce "All things Interior"',
        img: eCommerce_Thumbnail,
        url: "https://all-things-interior.netlify.app/",
        repo: "https://github.com/NattyDCI/e-commerce-react-app",
        para: "In this project I experiemented with CSS utility framework SASS and various component libraries for elements such as the Carousel and contact form validation. Experimented with operations in React using Context for state management. Furthermore worked on the styling and overall look of the website. " 
    },
    {
        id: "4",
        title: "Text Animation with CSS",
        img: Animation_puppy,
        url: "https://codepen.io/nattydci/pen/OJzRbLR",
        para: "Animation done with CSS, click to find a link to my codepen. "

    }
    
]

export const Projects2 = [
    {
        id: "1",
        title: "POOPIE Tours",
        img: Mlay_Tours_Project,
        url: "https://mlaytours.onrender.com/",
        repo: "https://github.com/Final-Project-Group-4/Backend-Project",
        para: "Mern Stack Project"
    },
    {
        id: "2",
        title: "Neuromorphic Music Player",
        img: Neuromorphic_music_player,
        url: "https://codepen.io/nattydci/pen/LYeYOGY",
        repo: "https://github.com/Final-Project-Group-4/Backend-Project",
        para: "Small project showing CSS skills and the use of Neuroformic elements, Click to find a link to my codepen"

    },
    {
        id: "3",
        title: "Neuromorphic Music Player",
        img: Neuromorphic_music_player,
        url: "https://codepen.io/nattydci/pen/LYeYOGY",
        repo: "https://github.com/Final-Project-Group-4/Backend-Project"

    },
    {
        id: "4",
        title: "Neuromorphic Music Player",
        img: Neuromorphic_music_player,
        url: "https://codepen.io/nattydci/pen/LYeYOGY",
        repo: "https://github.com/Final-Project-Group-4/Backend-Project"

    },

]
