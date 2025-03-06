'use client';
import { useState } from "react";
import { FetchListPosts } from "../ListPost/blogList";

export default function LoadMore() {
    const [limit, setLimit] = useState(3);
    
    function loadMore() {
        setLimit(limit + 3);
        FetchListPosts(limit);
        setTimeout(() => { 
            window.scrollTo({ 
                top: document.documentElement.scrollHeight, 
                behavior: 'smooth' 
            }); 
        }, 2000);
    }

    return (
        <div className="flex justify-center">
            <button onClick={loadMore} type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
        </div>
    )
}
