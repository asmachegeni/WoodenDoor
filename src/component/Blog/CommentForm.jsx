import "../../style/Blog/CommentForm.css";
const CommentForm = (props) => {
  return (
    <div className="Container">
      <span className="Title">نظر خود را درباره این پست بنویسید.</span>
      <form action="#" method="post" className="Form">
        <div className="Inputs">
          <div className="Col-1">
            <input
              type="text"
              id="UserName"
              value={props.username}
              disabled
            />
            <input
              type="email"
              id="Email"
              value={props.email}
              disabled
            />
          </div>
          <div className="Col-2">
            <textarea
              id="CommentText"
              placeholder="نظر شما..."
              required
            ></textarea>
          </div>
        </div>
        <div className="BtnContainer">
          <input type="submit" value="ارسال" className="SendBtn" />
        </div>
      </form>
    </div>
  );
};
export default CommentForm;
