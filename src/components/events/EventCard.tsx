import { useState } from "react";
import { cards } from "./cards";
export type Card = {
    description: string;
    title: string;
    location: string;
    date: string;
    image: string;
}

export const EventCard = () => {
    const [current, setCurrent]= useState<Card|null>(null);
    return (
        <div className="py-10 bg-gray-100 min-h-screen w-full">
            <div className="max-w-lg mx-auto flex flex-col gap-10">
                {cards.map((card, idx) => (
                    <button 
                    onClick={()=>{setCurrent(card)}}
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






































