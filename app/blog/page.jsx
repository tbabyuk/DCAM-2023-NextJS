import { PageTitle } from "../components/PageTitle";
import { BlogCard } from "../components/BlogCard";
import { articles } from "./articlesData";

export const metadata = {
    title: "DCAM | Blog",
    description: "List of all our blog articles"
}

const BlogPage = () => {


    return ( 
        <main className="blog-page">
            <PageTitle title="Blog" />

            {/* place-items-center grid gap-y-8 md:grid-cols-2 xl:grid-cols-3 */}

            <div className="blog-list grid gap-y-8 md:grid-cols-2 xl:grid-cols-3 px-5 lg:px-36 bg-gray-100 py-20 mt-24">

                {articles.map((article) => (
                    <BlogCard
                        key={article.id} 
                        title={article.title}
                        date={article.date}
                        imageUrl={article.imageUrl}
                        description={article.description}
                        blogLink={article.blogLink}
                        category={article.category}
                    />
                ))}
            </div>

        </main>
     );
}
 
export default BlogPage;