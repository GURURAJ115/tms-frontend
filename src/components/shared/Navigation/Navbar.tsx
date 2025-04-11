import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {motion} from 'motion/react'
export const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Login",
            href: "/login",
        },
    ]
    const [hovered, setHovered] = useState<number|null>(null);
    return (
        <div className='py-40'>
            <nav className='max-w-xl mx-auto bg-gray-100 rounded-full px-4 py-2 flex'>
                <BrowserRouter>
                    {navItems.map((item,idx) => (
                        <Link
                            onMouseEnter={()=>setHovered(idx)}
                            onMouseLeave={()=>setHovered(null)}
                            className='w-full relative group text-center py-3 text-xs text-neutral-500'
                            to={item.href}
                            key={item.title}
                        >
                            {hovered===idx && <motion.div 
                            layoutId="hover"
                            className='absolute w-full h-full inset-0 rounded-full bg-black'></motion.div>
                            }<span className='relative group-hover:text-white'>
                            {item.title}
                            </span>
                        </Link>
                    ))}
                </BrowserRouter>
            </nav>
        </div>
    )
}
