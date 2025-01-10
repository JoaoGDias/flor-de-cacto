'use client';

import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { DataPost } from "@/utils/wordpressPostsTypes";
import Link from "next/link";
import Image from "next/image";

async function FetchListPosts(limit: number) {
    const blogPosts =  await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?per_page=${limit}&order=desc&status=publish&_embed`)
    .then((response) => response.json())
    .catch(err => console.error(err));

    return blogPosts
}


export default function BlogList(){
    const [posts, setPosts] = useState<DataPost[]>([]);
    const [limit, setLimit] = useState(3);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            const posts = await FetchListPosts(limit);
            setIsLoading(true);
            setPosts(posts);
            setIsLoading(false);
        }
        fetchPosts();
    }, [limit])
    
    function loadMore() {
        setTimeout(() => { 
            setLimit(limit + 3);
            window.scrollTo({ 
                top: document.documentElement.scrollHeight, 
                behavior: 'smooth' 
            }); 
        }, 2000);
        console.log(limit)
    }
    

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long', 
        year: 'numeric'
    };

    return (
        <>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {isLoading ? <Loading /> :
                    posts.filter((post: DataPost) => {
                        const categories = post._embedded['wp:term'][0]; // Acessa as categorias do post
                        return !categories.some((category: { id: number; }) => category.id === 27); // Exclui posts com categoria ID 27
                    }).slice(0, 4).map((post: DataPost) => (
                        <Link key={post.id} href={`blog/${post.slug}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            {post.featured_media > 0 && (
                                <Image src={post._embedded['wp:featuredmedia']['0'].source_url} loading="lazy" width="667" height="384" alt={post.title.rendered} className="object-cover w-full rounded h-44 dark:bg-gray-500" />
                            )}
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post.title.rendered}</h3>
                                <span className="text-xs dark:text-gray-600">{new Date(post.date).toLocaleDateString("pt-BR", options)}</span>
                                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            </div>
                        </Link>
                ))}
            </div>

            <div className="flex justify-center">
                <button onClick={loadMore} type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
            </div>
        </>
    );
}