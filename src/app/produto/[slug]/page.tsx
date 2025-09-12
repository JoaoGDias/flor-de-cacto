import { fetchProductBySlug } from "@/utils/wooCommerceApi";
import Link from "next/link";
import CartButton from "@/components/Button/cartButton";
import { Product } from "@/utils/wooCommerceTypes";
import ProductImage from "@/components/ListProduct/ProductImage";
import ProductPrice from "@/components/ListProduct/ProductPrice";
import ProductColor from "@/components/ListProduct/ProductColor";
import ProductSize from "@/components/ListProduct/ProductSize";

export default async function Produto({params} : { params: Promise<{ slug: string }>}) {
    const slug = (await params).slug

    const product : Product = await fetchProductBySlug(slug).catch((error) => {
        console.error(error);
        return null;
    });

    const productImage = Object.values(product.images);

    return (
        <div className="container">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                       
                       <ProductImage imgProduct={productImage} />

                        <div className="md:py-8">
                            {/* NOME E CATEGORIA */}
                            <div className="mb-2 md:mb-3">
                                <span className="mb-0.5 inline-block text-gray-500">{product.categories[0].name}</span>
                                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{product.name}</h2>
                            </div>

                            {/* PREÇO */}
                            <ProductPrice salePrice={product.sale_price} regularPrice={product.regular_price} />

                            {/* COR */}
                            <ProductColor colorsPrdct={product.attributes} />
                           
                            {/* TAMANHO */}
                            <ProductSize sizePrdct={product.attributes} />
                                    
                            {/* ENTREGA */}
                            <div className="mb-6 flex items-center gap-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>

                                <span className="text-sm">2-4 dias para entrega</span>
                            </div>

                            {/* CARRINHO | CHECKOUT */}
                            <div className="flex gap-2.5">
                                <CartButton cartItem={product}/>
                                <Link href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Comprar agora</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}