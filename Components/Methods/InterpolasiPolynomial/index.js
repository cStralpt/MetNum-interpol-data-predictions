import React, { useState } from "react";
import Lenier from "./Lenier";
import Kuadratik from ".//Kuadratik";
import styles from "/styles/Home.module.css";

function Interpolasipolynomial() {
  const [polynomialTabs, setPolynomialTabs] = useState("Lenier");
  const [tabsContainer] = useState(["Lenier", "Kuadratik"]);
  const [radioIsCheck, setRadioCheck] = useState({
    Lenier: true,
    Kuadratik: false,
  });
  return (
    <div className={styles.ioExecution_sheetsContainer}>
      <div className={styles.ioExecution_sheetsBar}>
        <div className={styles.ioExecution_barBtn_Container}>
          {tabsContainer.map((d,index) => (
            <div className={styles.barBtnpacker} key={index}>
              <input
                type="radio"
                id={d}
                checked={
                  (d === "Lenier" && radioIsCheck.Lenier) ||
                  (d === "Kuadratik" && radioIsCheck.Kuadratik)
                }
                name="tabIndicator"
                className={styles.ioExecution_barBtn_tabIndicator}
                onClick={() => {
                  setPolynomialTabs(d);
                  if (d === "Kuadratik") {
                    radioIsCheck.Lenier = false;
                    radioIsCheck.Kuadratik = true;
                  } else if (d === "Lenier") {
                    radioIsCheck.Kuadratik = false;
                    radioIsCheck.Lenier = true;
                  }
                }}
              />
              <div className={styles.ioExecution_barBtn}>
                <h6 className={styles.bartBtn_title}>{d}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {polynomialTabs === "Lenier" ? <Lenier /> : <Kuadratik />}
    </div>
  );
}

export default Interpolasipolynomial;
