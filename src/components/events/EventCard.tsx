import { useEffect, useRef, useState } from "react";
import { cards } from "./cards";
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
        const timeout = setTimeout(()=>{
            activated=true;
        },0);
        const handleClick = (event: MouseEvent) => {
            if(!activated) return;
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

export const EventCard = () => {
    const [current, setCurrent] = useState<Card | null>(null);
    const ref = useOutsideClick(() => setCurrent(null));
    return (
        <div className="py-10 bg-gray-100 min-h-screen  relative">
            {current && 
            <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></div>}
            {current &&
                (<div
                    ref={ref}
                    className="h-[600px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 w-72 rounded-2xl border border-neutral-200 p-4 ">
                    <img src={current.image}
                        alt={current.title}
                        className="w-full aspect-square rounded-2xl"
                    />
                    <div className="flex flex-col justify-between items-start">
                        <div className="flex items-start justify-between py-4 width-full gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <h2 className="font-bold text-xs tracking-tight text-black">{current.title}</h2>
                            </div>
                            <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                                Register
                            </div>
                        </div>
                        <p className="text-[10px] text-neutral-500 overflow-auto h-60">
                            {current.description}
                        </p>
                    </div>
                </div>)}
                
            <div className="max-w-lg mx-auto flex flex-col gap-10">
                {cards.map((card, idx) => (
                    <button
                        onClick={() => { setCurrent(card) }}
                        key={card.title}
                        className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200">
                        <div className="flex gap-4 items-center">
                            <img src={card.image}
                                alt={card.title}
                                className="h-14 aspect-square rounded-xl" />
                            <div className="flex flex-col items-start gap-2">
                                <h2 className="font-bold text-xs tracking-tight text-black">{card.title}</h2>
                                <p className="text-[10px] text-neutral-500">{card.description}</p>
                            </div>
                        </div>
                        <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                            Register
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}