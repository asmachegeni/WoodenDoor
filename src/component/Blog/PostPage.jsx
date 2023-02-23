import "../../style/Blog/PostPage.css";
import Post from "./Post";
import Categories from "./Categories";
import RelatedPosts from "./RelatedPosts";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Header from "../Header";
import Footer from "../Footer";

const PostPage = () => {
  return (
    <div className="PostPage">
      <Header />
      <div className="PostPage-Container">
        <div className="PostPage-Wrapper">
          <Post />
          <Categories />
        </div>
      </div>
      <RelatedPosts />
      <Comments />
      <CommentForm />
      <Footer />
    </div>
  );
};
export default PostPage;
