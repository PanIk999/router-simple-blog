import Data from "../Data"
import BlogCard from "../Components/BlogCard"
import "./Blog.css";

const articles = Data;

const Blog = () => {
    console.log(articles);
    return <div className="blogContainer">{articles.map((articles, index) => (
        <BlogCard 
        key={"BlogCard" + index}
        id={articles.id}
        img={articles.img_url}
        title={articles.title}
        />
    ))}</div> 
}
 
export default Blog;