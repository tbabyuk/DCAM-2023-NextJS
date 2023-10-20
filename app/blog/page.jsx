import { PageTitle } from "../components/PageTitle";
import { BlogCard } from "../components/BlogCard";
import { articles } from "./articlesData";


export const metadata = {
    title: "Blog | Da Capo Academy of Music",
    description: "Explore our many helpful blog articles on the topic of music!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Blog | Da Capo Academy of Music",
        description: "Explore our many helpful blog articles on the topic of music!",
        url: "https://dacapomusic.ca/blog",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
}


const BlogPage = () => {

    return ( 
        <main className="blog-page">
            <PageTitle title="Blog" />

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