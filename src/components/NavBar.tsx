import type { components } from '../interfaces/components'
import { displayComponentInConsole } from "../utils/display_components"
import { useState } from 'react';

function MenuIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    )
}

export function NavBar({ data }: { data: components }) {

    displayComponentInConsole(data);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="relative">
            <div className="navbar bg-neutral-500/20 rounded-2xl justify-end w-[90%] mx-auto">
                <div className={`flex items-center transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                    {data.sub.map((subItem, index) => (
                        <div
                            key={index}
                            className="relative mr-4 text-right"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="font-medium text-sm cursor-pointer px-3 py-2 hover:bg-gray-100/50 rounded-lg">
                                <p className="text-black">{subItem.label}</p>
                            </div>

                            {hoveredIndex === index && subItem.sub && subItem.sub.length > 0 && (
                                <div className="absolute top-full right-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50">
                                    <ul className="py-2">
                                        {subItem.sub.map((subSubItem, subIndex) => (
                                            <li key={subIndex}>
                                                <div className="px-4 py-2 hover:bg-gray-100">
                                                    <span className="font-medium block"><p className="text-black">{subSubItem.label}</p></span>
                                                    <span className="text-sm text-gray-600">
                                                        <p className="text-black">{subSubItem.data}</p>
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    className="btn btn-square bg-neutral-500/80 border-white/0"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <MenuIcon />
                </button>
            </div>
        </div>
    )
}