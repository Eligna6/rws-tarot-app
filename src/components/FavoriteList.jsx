import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import Card from "./Card";
import Empty from "./Empty";

const FavoriteList = (props) => {
  const { favoriteCards } = props;
  return (
    <div className="favoriteList">
      {!favoriteCards.length ? (
        <Empty />
      ) : (
        favoriteCards.map((card) => (
          <Card key={card.data.id} data={card.data} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteCards: state.favoriteCards,
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
