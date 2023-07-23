import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // setPage(page + 1);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + 1);
    console.log(articles.length);
    console.log(totalResults);
  };
  useEffect(() => {
    updateNews();
    if (props.home === "Home") {
      document.title = `NewsWala | Home`;
    } else document.title = `NewsWala | ${capitalise(props.category)}`;
    if (props.theme === "sun") {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <u className={`text-${props.tcolor}`}>
        <h1
          style={{ marginTop: "80px", fontFamily: "cursive" }}
          className={`text-center text-${props.tcolor} mb-2`}
        >
          NewsWala - Top{" "}
          {capitalise(props.home === "Home" ? "" : props.category)} Headlines
        </h1>
      </u>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row ">
            {articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    tcolor={props.tcolor}
                    bcolor={props.bcolor}
                    title={e.title}
                    description={e.description}
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
// constructor>render>componentDidMount
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
  home: "NOHOME",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
