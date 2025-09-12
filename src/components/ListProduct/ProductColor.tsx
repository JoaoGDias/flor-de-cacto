'use client';

import { useState } from "react";

export default function ProductColor(props) {
    const [colorSlct, setColorSlct] = useState<number | null>(null);
    const { colorsPrdct } = props;
    const colors = colorsPrdct.filter( (attributes: { name: string; }) => attributes.name == 'Cor' )[0] || '';


    return (
        colors && (
        <div className="mb-4 md:mb-6">
            <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Cor</span>

            <div className="flex flex-wrap gap-2">
                {colors.options.map(( color: string, index : number ) =>(
                    <button 
                        type="button" 
                        key={colors.id + index} 
                        data-color={color} 
                        onClick={()=> {setColorSlct(index)}}
                        className={`flex h-8 px-4 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-[#97a27fc7] active:bg-gray-200 ${colorSlct === index ? 'bg-[#97A27F] text-white selected' : ''}`}
                    >{color}</button>
                ))}
            </div>
        </div>
        )
    );
}

