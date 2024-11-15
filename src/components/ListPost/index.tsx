import Link from "next/link";
import Image from "next/image";

export default async function ListPost() {
    const blogPosts =  await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?_embed&per_page=3&order=desc&status=publish`)
    const posts = await blogPosts.json();
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12 max-w-7xl mx-auto">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-12 max-w-lg">
                    <h2 className="mb-4 text-left text-2xl font-bold text-gray-800 md:mb-2.5 lg:text-3xl title">Confira nossos últimos posts</h2>
                    <p className="max-w-screen-md text-left text-gray-500 md:text-base sub-title">Abaixo nossos posts mais recentes, e não esquece de se inscrever na newsletter para ficar por dentro de todas as novidades!</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
                    {posts.map(post => (
                        <div key={post.id} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                            <Link href="#" ></Link>
                            {post.featured_media > 0 ?
                                <Image src={post._embedded['wp:featuredmedia']['0'].source_url} loading="lazy" fill={true} alt={post.title.rendered} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            : ''}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                            <div className="relative mt-auto p-4">
                                <span className="block text-sm text-gray-200">{new Date(post.date).toLocaleDateString("pt-BR", options)}</span>
                                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">{post.title.rendered}</h2>

                                <Link href={`blog/${post.slug}`} className="font-semibold text-indigo-300">Leia mais</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}