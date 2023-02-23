import "../../style/Blog/RelatedPosts.css";
const RelatedPosts = (props) => {
  return (
    <div className="RelatedPosts">
      <div className="RelatedPosts-Container">
        <div className="RelatedPosts-row">
          <span className="RelatedPosts-Title">مطالب مشابه</span>
        </div>
        <div className="RelatedPosts-row">
          <div className="RelatedPosts-Post">
            <div className="RelatedPosts-Cover">
              <a href={props.uri}>
                <img src={props.coveruri} />
              </a>
            </div>
            <div className="RelatedPosts-PostTitle">
              <a href={props.uri}>{props.title}</a>
            </div>
          </div>
          <div className="RelatedPosts-Post">
            <div className="RelatedPosts-Cover">
              <a href={props.uri}>
                <img src={props.coveruri} />
              </a>
            </div>
            <div className="RelatedPosts-PostTitle">
              <a href={props.uri}>{props.title}</a>
            </div>
          </div>
          <div className="RelatedPosts-Post">
            <div className="RelatedPosts-Cover">
              <a href={props.uri}>
                <img src={props.coveruri} />
              </a>
            </div>
            <div className="RelatedPosts-PostTitle">
              <a href={props.uri}>{props.title}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedPosts;
