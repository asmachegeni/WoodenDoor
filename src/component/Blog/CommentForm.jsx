import "../../style/Blog/CommentForm.css";
const CommentForm = () => {
  return (
    <div className="Container">
      <span className="Title">نظر خود را درباره این پست بنویسید.</span>
      <form action="#" method="post" className="Form">
        <div className="Inputs">
          <div className="Col-1">
            <input
              type="text"
              id="NickName"
              placeholder="نام و نام خانوادگی شما *"
              required
            />
            <input
              type="email"
              id="Email"
              placeholder="ایمیل شما * (نشان داده نمیشود)"
              required
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
