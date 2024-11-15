import Image from "next/image";
import Link from "next/link";
import { Product } from "@/utils/wooCommerceTypes";
import 'swiper/css';

interface Props {
    products: Product[];
}

export default function ListProduct(props : Props) {
    const { products } = props;

    function calcPorcentage(discountPrice: number, regularPrice: number) {

        const discount = 100 - ((discountPrice / regularPrice) * 100);
        return discount.toFixed(0);
    }
    
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12 max-w-7xl mx-auto">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-12 max-w-lg">
                    <h2 className="mb-4 text-left text-2xl font-bold text-gray-800 md:mb-2.5 lg:text-3xl title">Olha essas peças novas!</h2>
                    <p className="max-w-screen-md text-left text-gray-500 md:text-base sub-title">Olha só as últimas peças que a gente trouxe especialmente para vocês, vários looks para passar um inverno com muita elegância.</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map(product => (
                        <div key={product.id}>
                            <Link href={`produto/${product.slug}`} className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                <Image fill={true} src={product.images[0].src} loading="lazy" alt={product.images[0].alt} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                {product.sale_price ? (
                                    <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white jakarta">{`${calcPorcentage(Number(product.sale_price), Number(product.regular_price))}%`}</span>
                                ): '' }
                            </Link>

                            <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                                <div className="flex flex-col">
                                    <Link href="#" className="font-bold primaryColor transition duration-100 hover:primaryColor lg:text-lg">{product.name}</Link>
                                    <span className="text-sm text-gray-500 lg:text-base outFit">{product.categories[0].name}</span>
                                </div>

                                <div className="flex flex-col items-end">
                                    {                     
                                        product.sale_price ? (
                                        <>
                                            <span className="font-medium text-gray-600 lg:text-lg outFit primaryColor">{`R$ ${product.sale_price}`}</span>
                                            <span className="text-sm text-red-500 line-through outFit">{`R$ ${product.regular_price}`}</span>
                                        </>
                                    ):(
                                        <span className="font-medium text-gray-600 lg:text-lg outFit">{`R$ ${product.price}`}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}