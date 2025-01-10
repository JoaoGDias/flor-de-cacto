
export interface DataPost {
    id: number,
    date: Date,
    date_gmt: Date,
    guid: string,
    modified: Date,
    modified_gmt: Date,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {
        rendered: string
    },
    content: {
        rendered: string,
        protected: boolean
    },
    excerpt: {
        rendered: string,
        protected: boolean
    },
    _embedded: {
        author: [
            {
                id: number;
                name: string;
                url: string;
                description: string;
                link: string;
                slug: string;
            }
        ],
        "wp:featuredmedia": [
            {
                source_url: string;
            }
        ],
        "wp:term" : [
            {
                some(arg0: (category: { id: number; }) => boolean): unknown;
                id: number;
                link: string;
                name: string;
                slug: string;
                taxonomy: string;
                _links: object;
            }
        ]
    },
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    categories: number;
    tags: [];
};

export interface MenuNav {
    id: number;
    title: {
        rendered: string
    }
    content: {
        rendered: string;
    }
}