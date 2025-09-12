'use client';
import { useState } from "react";

export default function ProductSize(props) {
    const [sizeSlct, setSizeSlct] = useState<number | null>(null);
    const { sizePrdct } = props;
    const sizes = sizePrdct.filter( (attributes: { name: string; }) => attributes.name == 'Tamanho' )[0];

    return (

        sizes && (
            <div className="mb-8 md:mb-10">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Tamanho</span>

                <div className="flex flex-wrap gap-3">
                    {sizes.options.map((size : string, index : number) => (
                        <button 
                            type="button" 
                            key={sizes.id+index}
                            onClick={()=> {setSizeSlct(index)}}
                            className={`flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-[#97a27fc7] active:bg-gray-200 ${sizeSlct === index ? 'bg-[#97A27F] text-white selected' : ''}`}
                        >{size}</button>
                    ))}
                </div>
            </div>
        )
    );
}


