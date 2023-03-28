import React from "react";
import Card from "../Card";
import ilustrationEmpity from "../../assets/ilustrationEmpity.svg";
import styles from "./style.module.css";

const ListCards = ({ cardList, removeCard }) => {
  return (
    <div className={styles.containerResumeFinance}>
      <h3 className={styles.titleTwo}>Resumo Financeiro</h3>
      <ul className={styles.listCard}>
        {cardList.length > 0 ? (
          <>
            {cardList.map((card, id) => (
              <Card key={id} card={card} removeCard={removeCard} />
            ))}
          </>
        ) : (
          <div className={styles.containerListCard}>
            <h2 className={styles.titleDescription} aria-label="alert">
              Você ainda não possui nenhum lançamento
            </h2>
            <img src={ilustrationEmpity} alt="Ícone de lançamentos vazios" />
            <img src={ilustrationEmpity} alt="Ícone de lançamentos vazios" />
            <img src={ilustrationEmpity} alt="Ícone de lançamentos vazios" />
          </div>
        )}
      </ul>
    </div>
  );
};

export default ListCards;
