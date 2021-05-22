import React from "react";
import "../assets/styles/components/Empty.scss";
import emptyImage from "../assets/static/images/empty.png";

const Empty = () => (
  <div className="empty">
    <img className="empty-img" src={emptyImage} alt="Empty" />;
    <span className="empty-text">
      You haven&apos;t any favorites.
      <br />
      Go and select your favorite cards.
    </span>
  </div>
);

export default Empty;
