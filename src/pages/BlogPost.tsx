
import { useParams } from "react-router-dom";
import BlogPostPage from "../components/Blog/BlogPostPage";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  return <BlogPostPage useSearchLayout={true} />;
};

export default BlogPost;
