import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import ListCards from "../../components/ListCards";
import ValueTotal from "../../components/ValueTotal";
import { v4 as uuidv4 } from "uuid";

import styles from "./style.module.css";

export const DashPage = ({ setCurrentPage }) => {
  const [cardList, setCardList] = useState([]);

  const addCard = (card) => {
    const newCard = { ...card, id: uuidv4() };

    setCardList([...cardList, newCard]);
  };

  const removeCard = (IdCard) => {
    const newCardList = cardList.filter((card) => card.id !== IdCard);

    setCardList(newCardList);
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <main className={styles.mainPage}>
        <section className={styles.sectionForm}>
          <Form addCard={addCard} />
          <ValueTotal cardList={cardList} />
        </section>
        <section className={styles.sectionResume}>
          <ListCards cardList={cardList} removeCard={removeCard} />
        </section>
      </main>
    </>
  );
};
