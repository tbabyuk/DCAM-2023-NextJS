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
        <main className="blog-page bg-gray-100 pb-36">
            <h1 className="font-ovo text-white text-4xl px-5 py-14 lg:px-36 xl:px-52 bg-[url('/images/page-headers/blog-page.jpg')] bg-center bg-cover">Blog</h1>
            
            <div className="blog-list grid gap-y-8 md:grid-cols-2 xl:grid-cols-3 px-5 lg:px-36 py-20">
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