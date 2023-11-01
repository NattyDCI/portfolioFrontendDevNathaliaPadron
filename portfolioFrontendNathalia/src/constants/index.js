import React from "react";
import { agile, behanceLogo, design_minded_icon, discordLogo, envelopeIcon, girlDesk3D, githubLogo, sassLogo, cssLogo, htmlLogo, javascriptLogo, linkedInLogo, messageIcon, mongodbLogo, moonIcon, multiculturalIcon, nodejsLogo,  personIcon, profile_bewerbung_foto, reactLogo,typescript_logo, paperplaneIcon, backtoTop, hamburguerMenuIcon, closeIcon } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "HOME",
    },
    {
        id: "work",
        title: "WORK"
    },
    {
        id: "about",
        title: "ABOUT"
    },
    {
        id: "contact",
        title: "CONTACT"
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
    {
        title: "about",
        parragraf1: "Hi there! 👋🏻 , My name is Nathalia Padron. I am originally from Caracas, Venezuela and I am currently based in Stuttgart, since 2016.",
        parragraf2: "Before making the leap into Front-end Design I studied Product Design in IDC ( Instituto de Diseno de Caracas ) and worked several years as a Grafic Designer in Germany and Venezuela.",
        parragraf3: "I feel comfortable working with CSS and Javascript and I continue to learn React, I would love to extend my skillset to perform tasks related to UX/UI. Also, I have recently received a certification in MERN Stack and continue to learn and develop my understanding towards the backend.",
        recently: "Recently I have been working with the following technologie Stack",
        logos: [
            htmlLogo,
            cssLogo,
            javascriptLogo,
            sassLogo,
            typescript_logo,
            reactLogo,
            nodejsLogo,
            mongodbLogo,
        ],
    }

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

