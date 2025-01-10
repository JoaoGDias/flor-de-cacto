'use client';

import { useState } from "react";
import FetchPost from "./dataPost";

export default function LoadMore() {
    const [page, setPage] = useState(1);

    function loadMore() {
        setPage((page + 1));
        FetchPost(page);
        // setTimeout(() => { 
        //     window.scrollTo({ 
        //         top: document.documentElement.scrollHeight, 
        //         behavior: 'smooth' 
        //     }); 
        // }, 1500);
    }
    return (
        <div className="flex justify-center">
            <button onClick={loadMore} type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
        </div>
    )
}