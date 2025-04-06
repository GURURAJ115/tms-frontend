import { useState } from "react"
import { HomeIcon } from "../../../assets/svgs/HomeIcon";
import { ChartBar } from "../../../assets/svgs/ChartBar";
import { ChevronLeft } from "../../../assets/svgs/ChevronLeft";
import { ChevronRight } from "../../../assets/svgs/ChevronRight";
import { motion } from "motion/react";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const links = [{
        name: "Home",
        href: "/",
        icon: <HomeIcon></HomeIcon>
    }, {
        name: "Analytics",
        href: "/analytics",
        icon: <ChartBar></ChartBar>
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: <ChartBar></ChartBar>
    }]

    const sidebarVariant = {
        open: {
            width: "12rem"
        },
        closed: {
            width: "4.5rem"
        }
    }
    const childVariants = {
        open:{
            opacity: 1,
            y: 0
        }
        ,
        closed:{
            opacity: 0,
            y:-10
        }
    }
    const parentVariants = {
        open:{
            transition:{
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        },
        closed: {
            transition:{
                staggerChildren: 0.08,
                staggerDirection:-1
            }
        }
    }
    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            transition={{
                duration: 0.3
            }}
            className="border-r border-neutral-100 h-full">
            <motion.nav
                variants={sidebarVariant}
                className="bg-white shadow-md h-full">
                <div className="p-4 flex justify-between  items-center">
                    <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
                        Dashboard
                    </h2>
                    <button
                        onClick={toggleSidebar}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus: outline-none"
                        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}>
                        {isOpen ? <ChevronLeft /> : <ChevronRight />}
                    </button>
                </div>
                <div className="relative">
                    <nav className="p-4">
                        <motion.ul variants={parentVariants} className="space-y-2">
                            {links.map((link) => (
                                <motion.li variants={childVariants} key={link.name} >
                                    <a  href={link.href}
                                        className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200 space-x-2"
                                        title={!isOpen ? link.name : ""}>
                                        <div>{link.icon}</div>
                                        <div>{isOpen && link.name}</div>
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                </div>
            </motion.nav>
        </motion.div>
    )
}