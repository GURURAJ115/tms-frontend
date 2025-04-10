import { useEffect, useRef, useState } from "react";
import { cards } from "./cards";
import { motion } from 'motion/react';
export type Card = {
    description: string;
    title: string;
    location: string;
    date: string;
    image: string;
}

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let activated = false;
        const timeout = setTimeout(() => {
            activated = true;
        }, 0);
        const handleClick = (event: MouseEvent) => {
            if (!activated) return;
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener("click", handleClick);
        };
    }, [callback]);

    return ref;
};
//have to change card.title with card.id later-on.
export const EventCard = () => {
    const [current, setCurrent] = useState<Card | null>(null);
    const ref = useOutsideClick(() => setCurrent(null));
    return (
        <div className="py-10 bg-gray-100 min-h-screen  relative">
            {current &&
                <motion.div 
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:1
                }}
                className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></motion.div>}
            {current &&
                (<motion.div
                    layoutId={`card-${current.title}`}
                    ref={ref}
                    className="h-[500px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 w-72 rounded-2xl border border-neutral-200 p-4 overflow-hidden">
                    <motion.img
                        layoutId={`card-image-${current.title}`}
                        src={current.image}
                        alt={current.title}
                        className="w-full aspect-square rounded-2xl"
                    />
                    <div className="flex flex-col justify-between items-start">
                        <div className="flex items-start justify-between py-4 width-full gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <motion.h2
                                    layoutId={`card-title-${current.title}`}
                                    className="font-bold text-xs tracking-tight text-black">{current.title}</motion.h2>
                            </div>
                            <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                                Register
                            </div>
                        </div>
                        <motion.p
                            layoutId={`card-description-${current.title}`}
                            className="text-[10px] text-neutral-500 overflow-auto h-60 scrollbar-hide pb-20 [mask-image:linear-gradient(to_top,transparent_20%,black_90%)]">
                            {current.description}
                        </motion.p>
                    </div>
                </motion.div>)}

            <div className="max-w-lg mx-auto flex flex-col gap-10">
                {cards.map((card) => (
                    <motion.button
                        layoutId={`card-${card.title}`}
                        onClick={() => { setCurrent(card) }}
                        key={card.title}
                        className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200">
                        <div className="flex gap-4 items-center">
                            <motion.img
                                layoutId={`card-image-${card.title}`}
                                src={card.image}
                                alt={card.title}
                                className="h-14 aspect-square rounded-xl" />
                            <div className="flex flex-col items-start gap-2">
                                <motion.h2
                                    layoutId={`card-title-${card.title}`}
                                    className="font-bold text-xs tracking-tight text-black">{card.title}</motion.h2>
                                <motion.p
                                    layoutId={`card-description-${card.title}`}
                                    className="text-[10px] text-neutral-500">{card.description}</motion.p>
                            </div>
                        </div>
                        <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                            Register
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    )
}