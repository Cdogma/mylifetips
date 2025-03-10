
import { useParams } from "react-router-dom";
import BlogPostPage from "../components/Blog/BlogPostPage";
import LayoutWithSearch from "../components/Layout/LayoutWithSearch";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  return (
    <LayoutWithSearch>
      <BlogPostPage useSearchLayout={true} />
    </LayoutWithSearch>
  );
};

export default BlogPost;
