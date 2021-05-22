import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";
import images from "../assets/static/images/cards/index";

const useGetCards = () => {
  const [cards, setCards] = useLocalStorage("cards", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const majorArcana = new Array();

  async function getCards() {
    try {
      const response = await axios.get(
        "https://rws-cards-api.herokuapp.com/api/v1/cards/"
      );

      const result = response.data.cards;
      
      for (let i = 0; i < result.length; i++) {
        const card = result[i];
        if (card.type === "major") {
          card.id = card.value_int;
          card.image = images[card.id];
          majorArcana.push(card);
        }
      }      
      majorArcana.sort((a, b) => a.id - b.id);
      console.log(majorArcana);
      setCards(majorArcana);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  return { cards, loading, error, getCards };
};

export default useGetCards;
