import Image from "next/image";
import Link from "next/link";
import { fetchWooCommerceProducts } from '@/utils/wooCommerceApi'
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default async function Home() {
  const blogPosts =  await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?_embed&order=desc`)
  const posts = await blogPosts.json();

  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );
 
  const products = wooCommerceProducts.data;

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  
  function calcPorcentage(descountPrice: number, regularPrice: number) {

    const descount = 100 - ((descountPrice / regularPrice) * 100);

    return descount.toFixed(0);
  }


  return (
    <>
      <Hero />

      {/* Bloco lista de produtos */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 max-w-7xl mx-auto">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-12 max-w-lg">
            <h2 className="mb-4 text-left text-2xl font-bold text-gray-800 md:mb-2.5 lg:text-3xl title">Olha essas peças novas!</h2>
            <p className="max-w-screen-md text-left text-gray-500 md:text-base sub-title">Olha só as últimas peças que a gente trouxe especialmente para vocês, vários looks para passar um inverno com muita elegância.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.filter(product => product.stock_status == 'instock').slice(0,4).map(product => (
            <div key={product.id}>
              <Link href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                <Image fill={true} src={product.images[0].src} loading="lazy" alt={product.images[0].alt} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                {product.sale_price ? (
                  <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white jakarta">{`${calcPorcentage(product.sale_price, product.regular_price)}%`}</span>
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
      
      {/* Bloco lista de posts */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 max-w-7xl mx-auto">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-12 max-w-lg">
            <h2 className="mb-4 text-left text-2xl font-bold text-gray-800 md:mb-2.5 lg:text-3xl title">Confira nossos últimos posts</h2>
            <p className="max-w-screen-md text-left text-gray-500 md:text-base sub-title">Abaixo nossos posts mais recentes, e não esquece de se inscrever na newsletter para ficar por dentro de todas as novidades!</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
            {posts.filter(post => post.status == 'publish').slice(0,3).map(post => (
              <div key={post.id} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                <Link href="#" ></Link>
                  <Image src={post._embedded['wp:featuredmedia']['0'].source_url} loading="lazy" fill={true} alt={post.title.rendered} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-gray-200">{new Date(post.date).toLocaleDateString("pt-BR", options)}</span>
                    <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">{post.title.rendered}</h2>

                    <Link href="/" className="font-semibold text-indigo-300">Leia mais</Link>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bloco NewsLetter */}
      <div className="bg-white pt-6 sm:pt-8 lg:pt-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center bg-gray-100 p-4 sm:p-8">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">Get the latest updates</h2>
              <p className="text-center text-gray-500">Sign up for our newsletter</p>
            </div>

            <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
              <input placeholder="Email" className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

              <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
            </form>

            <p className="text-center text-xs text-gray-400">By signing up to our newsletter you agree to our <Link href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term of Service</Link> and <Link href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>

     <Footer />
    </>
  );
}
