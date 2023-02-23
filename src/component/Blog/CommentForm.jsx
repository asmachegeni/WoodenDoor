import "../../style/Blog/CommentForm.css";
const CommentForm = (props) => {
  return (
    <div className="CommentForm">
      <span className="CommentForm-Title">نظر خود را درباره این پست بنویسید.</span>
      <form action="#" method="post" className="CommentForm-Form">
        <div className="CommentForm-Inputs">
          <div className="CommentForm-Col-1">
            <input
              type="text"
              id="CommentForm-UserName"
              value={props.username}
              disabled
            />
            <input
              type="email"
              id="CommentForm-Email"
              value={props.email}
              disabled
            />
          </div>
          <div className="CommentForm-Col-2">
            <textarea
              id="CommentForm-CommentText"
              placeholder="نظر شما..."
              required
            ></textarea>
          </div>
        </div>
        <div className="CommentForm-BtnContainer">
          <input type="submit" value="ارسال" className="CommentForm-SendBtn" />
        </div>
      </form>
    </div>
  );
};
export default CommentForm;
