import React, { Component } from "react";
import NewsItem from "./NewsItem";

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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=088a564692ba4bec9ff898b1a311ae95&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      alert("No more news.");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=088a564692ba4bec9ff898b1a311ae95&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=088a564692ba4bec9ff898b1a311ae95";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>TrendyThreads - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
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
        <div className="container d-flex justify-content-between">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
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
