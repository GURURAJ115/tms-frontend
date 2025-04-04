import { motion } from "motion/react";
import { ReactElement } from "react";
export interface ButtonProps {
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    loading?: boolean;
    onClick?: () => void;
}
export const Button = (props: ButtonProps) => {
    return <div>
        <motion.button
            // initial={{
            //     rotate:0,
            // }}
            // animate={{
            //     rotate:[0, 20, 0],
            // }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            whileHover={{
                rotateX: 20,
                rotateY: 20,
                boxShadow: "0px 20px 50px rgba(8,112,184,0.7",
                y: -5
            }}
            whileTap={{
                y: 0
            }}
            style={{
                translateZ: 100,
            }}
            className="group relative text-neutral-400 px-10 py-3 rounded-xl bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
            <span className=" group-hover:text-cyan-500 transition-colors duration-300">{props.text}</span>
            <span className="absolute inset-x-0 bottom-[0px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-full mx-auto "></span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
        </motion.button>
    </div>
}
