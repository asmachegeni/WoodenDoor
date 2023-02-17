import "../../style/Blog/RelatedArticles.css";
const RelatedArticles = (props) => {
  return (
    <div className="RelatedArticles">
      <div className="Container">
        <div className="row">
          <span className="Title">مطالب مشابه</span>
        </div>
        <div className="row">
          <div className="Post">
            <div className="Cover">
              <a href={props.uri}>
                <img src={props.coveruri} />
              </a>
            </div>
            <div className="ArticleTitle">
              <a href={props.uri}>{props.title}</a>
            </div>
          </div>
          <div className="Post">
            <div className="Cover">
              <a href={props.uri}>
                <img src={props.coveruri} />
              </a>
            </div>
            <div className="ArticleTitle">
              <a href={props.uri}>{props.title}</a>
            </div>
          </div>
          <div className="Post">
            <div className="Cover">
              <a href={props.uri}>
                <img src={props.coveruri} />
              </a>
            </div>
            <div className="ArticleTitle">
              <a href={props.uri}>{props.title}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedArticles;
