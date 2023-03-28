import React from "react";
import styles from "./style.module.css";

const ValueTotal = ({ cardList }) => {
  const valueExpensive = cardList.filter((expensive) => {
    if (expensive.category == "despesa") {
      return expensive.value;
    }
  });

  const valueTotalExpensive = valueExpensive.reduce(
    (totalItensValueExpensive, itemValueExpensive) => {
      return totalItensValueExpensive + Number(itemValueExpensive.value);
    },
    0
  );

  const valueEntry = cardList.filter((entry) => {
    if (entry.category == "entrada") {
      return entry.value;
    }
  });

  const valueTotalEntry = valueEntry.reduce(
    (totalItensValueEntry, itemValueEntry) => {
      return totalItensValueEntry + Number(itemValueEntry.value);
    },
    0
  );

  const balance = valueTotalEntry - valueTotalExpensive;

  return (
    <div className={styles.containerValueTotal}>
      <div className={styles.containerValue}>
        <p className={styles.descriptionValue}>Valor Total:</p>
        <p className={styles.totalBalance}>
          {balance.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <span className={styles.informationOfBalance}>
        O valor se refere ao saldo
      </span>
    </div>
  );
};

export default ValueTotal;
