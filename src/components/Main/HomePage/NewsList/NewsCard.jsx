import React from "react";
import "./NewsCard.css";

const NewsCard = ({
  title,
  description,
  urlToImage,
  url,
  author,
  publishedAt
}) => (
  <div className="NewsCard">
    <div className="NewsCard-img">
      <img src={urlToImage} alt={author} />
    </div>
    <div className="NewsCard-content">
      <h2>{title}</h2>
      <p className="time">{publishedAt.replace("T", " ").split("Z")}</p>
      <p>{description}</p>
    </div>
    <div className="NewsCard-footer">
      <p>source: {author}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        See more
      </a>
    </div>
  </div>
);

export default NewsCard;
