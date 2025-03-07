
import { useParams } from "react-router-dom";
import BlogPostPage from "../components/Blog/BlogPostPage";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Pass the slug to the BlogPostPage component
  return <BlogPostPage useSearchLayout={true} slug={slug} />;
};

export default BlogPost;
