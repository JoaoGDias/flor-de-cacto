export default async function FetchPost(page :number) {
    const blogPosts =  await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/posts?per_page=3&page=${page}&order=desc&status=publish&_embed`)
    .then((response) => response.json())
    .catch(err => console.error(err));

    return blogPosts;
}