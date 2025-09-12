'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductImage(props) {
    const bgDefault = "/bg-default.png";
    const [currentImage, setCurrentImage] = useState<string>(bgDefault);   
    
    useEffect(() => {
        if (props.imgProduct.length > 0) setCurrentImage(props.imgProduct[0]);
    }, [props.imgProduct]);

    // Handle image selection from the thumbnails
    const handleThumbnailClick = (image) => {
        setCurrentImage(image);
    };

    return(
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {props.imgProduct.map((image) => (
                    <div key={image.id} className="overflow-hidden rounded-lg bg-gray-100">
                        <Link href={''} onClick={() => handleThumbnailClick(image)}>
                            <Image src={image.src} height={250} width={100} loading="lazy" alt={image.alt} className="h-full w-full object-cover object-center" />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image 
                    height={370} 
                    width={570} 
                    src={currentImage?.src || ''} 
                    loading="lazy"
                    placeholder ="blur"
                    blurDataURL={bgDefault}
                    alt={currentImage?.alt || 'Imagem do produto'} 
                    className="h-full w-full object-cover object-center" 
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>

            </div>
        </div>
    )
}