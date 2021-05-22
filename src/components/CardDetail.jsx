import React from "react";
import "../assets/styles/components/CardDetail.scss";

const CardDetail = (props) => {
  const { data } = props;
  const { type, name, meaning_up, meaning_rev, desc, image } = data;

  return (
    <div className="cardDetail">
      {/* <img className="cardDetail-img" src={image} alt="Arcana"></img> */}
      <div className="cardDetail__container">
        <h2 className="cardDetail-name">{name}</h2>
        <p className="cardDetail__item">
          <span className="cardDetail__item-type">Description:</span>{" "}
          {desc}
        </p>
        
      </div>
    </div>
  );
};

export default CardDetail;
