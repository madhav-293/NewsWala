import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";

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
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    if (props.home === "Home") {
      document.title = `NewsWala | Home`;
    } else document.title = `NewsWala | ${this.capitalise(props.category)}`;
  }
  capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=088a564692ba4bec9ff898b1a311ae95&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrevious = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center m-3">
          NewsWala - Top{" "}
          {this.capitalise(
            this.props.home === "Home" ? "" : this.props.category
          )}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
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
        <div className="container d-flex justify-content-between">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            type="button"
            style={
              this.state.loading
                ? { position: "fixed", bottom: "10%", left: "8%" }
                : {}
            }
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            style={
              this.state.loading
                ? { position: "fixed", bottom: "10%", right: "8%" }
                : {}
            }
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            type="button"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
// constructor>render>componentDidMount
