import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: "Shivam",
    lastName: "Goel",
    initials: "sg",
    position: "a Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '📍',
            text: 'New Delhi, India'
        },
        {
            emoji: "🎓",
            text: "Final year student of B.Tech in CSE at SRMIST"
        },
        {
            emoji: "📧",
            text: "shivamgoel2003@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/ShivamGoel05",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/shivamgoel05",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Shivam. I'm a final year student studying Bachelor of Technology in Computer Science and Engineering at SRM Institute of Science and Technology. I specialise in MERN stack web development and programming languages like: C++, Java and JavaScript.",
    skills:
    {
        proficientWith: ['c++', 'java', 'javascript', 'sql', 'mongoDB', 'express.js', 'react.js', 'node.js'],
        exposedTo: ['git', 'python']
    }
    ,
    hobbies: [
        {
            label: 'traveling',
            emoji: '🗺️'
        },
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'movies',
            emoji: '🍿'
        }
    ],
    portfolio: [
        {
            title: "NatureTrails",
            live: "https://github.com/ShivamGoel05/nature-trails",
            source: "https://github.com/ShivamGoel05/nature-trails",
            image: mock1
        },
        {
            title: "Concurrent Traffic Simulation",
            live: "https://github.com/ShivamGoel05/concurrent-traffic-simulation",
            source: "https://github.com/ShivamGoel05/concurrent-traffic-simulation",
            image: mock2
        },
        {
            title: "OpenStreetMap Route Planner",
            live: "https://github.com/ShivamGoel05/OpenStreetMap-route-planner",
            source: "https://github.com/ShivamGoel05/OpenStreetMap-route-planner",
            image: mock3
        },
        {
            title: "Music Player",
            live: "https://github.com/ShivamGoel05/music-player",
            source: "https://github.com/ShivamGoel05/music-player",
            image: mock4
        }
    ]
}