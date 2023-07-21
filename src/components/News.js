import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
    home: "NOHOME",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 0,
      totalResults: 0,
    };
    if (props.home === "Home") {
      document.title = `NewsWala | Home`;
    } else document.title = `NewsWala | ${this.capitalise(props.category)}`;
  }
  capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews() {
    this.props.setProgress(10);
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=088a564692ba4bec9ff898b1a311ae95&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=088a564692ba4bec9ff898b1a311ae95&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.totalResults);
    console.log(this.state.articles.length);
  };
  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <h1 className="text-center m-3">
          NewsWala - Top{" "}
          {this.capitalise(
            this.props.home === "Home" ? "" : this.props.category
          )}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url}>
                    <NewsItem
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
  }
}
// constructor>render>componentDidMount
