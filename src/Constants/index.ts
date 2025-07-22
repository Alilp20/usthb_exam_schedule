import { FaHistory, FaSearch, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { FaHouse, FaCalendar } from "react-icons/fa6"

const NavLinks = [
    {
        id: 1,
        href: "/",
        label: "Home",
        icon: FaHouse,
    },
    {
        id: 2,
        href: "/search",
        label: "Search",
        icon: FaSearch,
    },
    {
        id: 3,
        href: "/calender",
        label: "Calender",
        icon: FaCalendar,
    },
    {
        id: 4,
        href: "/history",
        label: "Exam History",
        icon: FaHistory,
    },
    {
        id: 5,
        href: "/contact",
        label: "Contact",
        icon: FaEnvelope,
    },

]

const myLinks = [
    {
        id: 1,
        label: "LinkedIn",
        icon:FaLinkedin,
        href:"https://www.linkedin.com/in/abdelalli-yousfi-76709b261/",
    },
    {
        id: 2,
        label: "Instagram",
        icon:FaInstagram,
        href:"https://www.instagram.com/alli.usfi/",
    },
    {
        id: 3,
        label: "Github",
        icon:FaGithub,
        href:"https://github.com/Alilp20/usthb_exam_schedule",
    },
]

export {NavLinks, myLinks}