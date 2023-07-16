import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  handlePrevious = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=088a564692ba4bec9ff898b1a311ae95&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=088a564692ba4bec9ff898b1a311ae95&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=088a564692ba4bec9ff898b1a311ae95&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsWala - Top Headlines</h1>
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
                  />
                </div>
              );
            })}
        </div>
        <div
          className="container "
          style={{
            position: "sticky",
            bottom: "6%",
          }}
        >
          <button
            className="btn btn-dark"
            style={{ position: "absolute", left: "2%" }}
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            style={{ position: "absolute", right: "2%" }}
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
