import React from "react";
import trash from "../../assets/trashBlack.svg";
import styles from "./style.module.css";

const Card = ({ card, removeCard }) => {
  console.log(card);
  let value = Number(card.value);
  return (
    <>
      {
        <li
          className={
            card.category === "entrada"
              ? `${styles.cardBox} ${styles.cardBorderGreen}`
              : `${styles.cardBox} ${styles.cardBorderGrey}`
          }
        >
          <div className={`${styles.containerInformationCard}`}>
            <h3 className={styles.descriptionItem}>{card.description}</h3>
            <p className={styles.categoryItem}>{card.category}</p>
          </div>

          <div className={styles.containerValueAndBtnRemoveCard}>
            <p className={styles.valueItem}>
              {value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button
              className={styles.btnRemove}
              onClick={() => removeCard(card.id)}
            >
              <img src={trash} alt="ícone de lixeira" />
            </button>
          </div>
        </li>
      }
    </>
  );
};

export default Card;
