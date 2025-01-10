import BlogList  from "@/components/ListPost/blogList";
import FeaturedPost from "@/components/ListPost/featuredPost";

export default function Blog() {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <FeaturedPost />
                <BlogList />
            </div>
        </section>
    )
}