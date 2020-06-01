import React, { Component } from "react";
import "./HomePage.css";
import NewsFiltersBar from "./NewsFiltersBar/NewsFiltersBar";
import NewsList from "./NewsList/NewsList";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      category: "general",
      searchQuery: null
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.category !== this.state.category ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      this.getArticles();
    }
  }

  getQuery() {
    const { category, searchQuery } = this.state;

    let query;
    if (category) {
      query = searchQuery
        ? `?category=${category}&q=${searchQuery}`
        : `?category=${category}`;
    } else {
      query = searchQuery ? `?q=${searchQuery}` : "";
    }
    return query;
  }

  getArticles() {
    fetch(`http://localhost:4000/articles${this.getQuery()}`)
      .then(response => response.json())
      .then(results => {
        this.setState({ results });
      });
  }

  setCategory = category => this.setState({ category });
  setSearchQuery = searchQuery => this.setState({ searchQuery });

  render() {
    const { results } = this.state;

    if (!results) return null;

    return (
      <div id="HomePage">
        <NewsFiltersBar
          onCategoryChange={this.setCategory}
          onSearchQueryChange={this.setSearchQuery}
          category={this.state.category}
        />
        <NewsList articles={results.articles} />
      </div>
    );
  }
}

export default HomePage;
