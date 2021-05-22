import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Card.scss";
import SVGStar from '../assets/static/icons/star.svg';
import CardDetail from "./CardDetail";
import useModal from "../custom-hooks/useModal";
import Modal from "./Modal";

const Card = (props) => {
  // const [modal, setModal] = useState(false);
  const { modal, handleCloseModal, handleOpenModal } = useModal();
  const [favorite, setFavorite] = useState(false);

  const { data, favoriteCards } = props;
  const {
    type,
    name_short,
    name,
    value,
    value_int,
    meaning_up,
    meaning_rev,
    desc,
    id,
    image,
  } = data;
  /*47:00*/

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  const isFavorite = () => {
    const result = favoriteCards.filter(
      (favoriteCard) => favoriteCard.data.id === id
    );
    if (result.length) {
      setFavorite(true);
    }
  };

  useEffect(() => {
    isFavorite();
  });

  return (
    <div className="card">
     <img onClick={handleOpenModal} className='card__img' src={image} alt='Card'/>
      <div className="card__details">
        <h2 className="card__details-name">{name}</h2>
        {favorite ? (
          <SVGStar
            onClick={() => handleDeleteFavorite(id)}
            className="card__details-star favorite"
          />
        ) : (
          <SVGStar
            onClick={handleSetFavorite}
            className="card__details-star noFavorite"
          />
        )}
        <p className="card__details__item">
          <span className="card__details__item-type">Number:</span> <b>{value_int}</b>
        </p>
        <p className="card__details__item">
          <span className="card__details__item-type">Meaning up:</span>{" "}
          {meaning_up}
        </p>
        <p className="card__details__item">
          <span className="card__details__item-type">
            Meaning reversed:
          </span>{" "}
          {meaning_rev}
        </p>
        <p onClick={handleOpenModal} className="card__details__item-more">
          Description...
        </p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CardDetail data={data} />
      </Modal>
    </div>
  );
};

Card.propTypes = {
  data: propTypes.object,
};

const mapStateToProps = (state) => {
  return {
    favoriteCards: state.favoriteCards,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
