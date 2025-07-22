import { HiHome, HiSearch, HiCalendar, HiBackspace, HiMail } from "react-icons/hi"

const NavLinks = [
    {
        id: 1,
        href: "/",
        label: "Home",
        icon: HiHome,
    },
    {
        id: 2,
        href: "/search",
        label: "Search",
        icon: HiSearch,
    },
    {
        id: 3,
        href: "/calender",
        label: "Calender",
        icon: HiCalendar,
    },
    {
        id: 4,
        href: "/exam",
        label: "Exam History",
        icon: HiBackspace,
    },
    {
        id: 5,
        href: "/contact",
        label: "Contact",
        icon: HiMail,
    },

]

export {NavLinks}