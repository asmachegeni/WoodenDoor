import "../../style/Blog/PostPage.css";
import Post from "./Post";
import Categories from "./Categories";
import RelatedPosts from "./RelatedPosts";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Header from "../Header";
import Footer from "../Footer";

const PostPage = ({ setType, userType }) => {
  return (
    <div className="PostPage">
      <Header setType={setType} userType={userType} />
      <div className="PostPage-Container">
        <div className="PostPage-Wrapper">
          <Post />
          <Categories />
        </div>
      </div>
      <RelatedPosts />
      {/* <Comments /> */}
      {/* <CommentForm /> */}
      <Footer />
    </div>
  );
};
export default PostPage;
