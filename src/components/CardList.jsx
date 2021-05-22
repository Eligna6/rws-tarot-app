import React, { useEffect } from "react";
import "../assets/styles/components/CardList.scss";
import Card from "./Card";
import Error from "./Error";
import Loader from "./Loader";
import useGetCards from "../custom-hooks/useGetCards";

const CardList = () => {
   
  const { cards, loading, error, getCards } = useGetCards();

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="cardList">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        cards.map((card) => <Card key={card.id} data={card} />)
      )}
    </div>
  );
};

export default CardList;
