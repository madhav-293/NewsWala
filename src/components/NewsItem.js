const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  let css = props.tcolor === "dark" ?"hoverDivDark":"hoverDiv";
  return (
    <div className="my-3 ">
      <div className={`card bg-${props.bcolor} ${css}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className={`card-body text-${props.tcolor}`}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className={`text-${props.tcolor}`}>
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>{" "}
          </p>
          <a
            href={newsUrl}
            target="blank"
            className={`btn btn-sm btn-${props.tcolor}`}
            style={{ position: "relative", left: "72%" }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
