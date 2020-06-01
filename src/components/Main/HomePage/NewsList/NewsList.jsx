import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard";

const NewsList = props => (
  <div id="NewsList">
    {props.articles.map(item => (
      <NewsCard
        urlToImage={item.urlToImage}
        title={item.title}
        description={item.description}
        url={item.url}
        author={item.source.name}
        key={item.title}
        publishedAt={item.publishedAt}
      />
    ))}
  </div>
);

export default NewsList;
