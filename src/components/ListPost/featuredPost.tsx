import Link from "next/link";
import Image from "next/image";

export default async function FeaturedPost() {
    const featuredPost = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?categories=27&per_page=1&order=desc&status=publish&_embed`)
    .then((response) => response.json())
    .then(response => response[0])
    .catch(err => console.error(err));

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long', 
        year: 'numeric'
    };

    return(      
        <Link href={`blog/${featuredPost.slug}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
            {featuredPost.featured_media > 0 && (
                <Image src={featuredPost._embedded['wp:featuredmedia']['0'].source_url} loading="lazy" width="667" height="384" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" alt={featuredPost.title.rendered} />
                )}
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{featuredPost.title.rendered}</h3>
                <span className="text-xs dark:text-gray-600">{new Date(featuredPost.date).toLocaleDateString("pt-BR", options)}</span>
                <div dangerouslySetInnerHTML={{__html: featuredPost.excerpt.rendered}} />
            </div>
        </Link>
    )
}