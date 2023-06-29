import { useState } from "react";
import styles from "./App.module.css";

import { homePage, getProduct, addProduct } from "./services/api";

export const App = () => {
  const [name, setName] = useState({});

  const getName = (qwery) => {
    const goods = { qwery };
    setName(goods);
  };

  const hello = () => {
    console.log(homePage());
  };

  const get = () => {
    console.log(getProduct(1));
  };

  return (
    <div className={styles.container}>
      <button onClick={() => hello()}>Hello</button>
      <button onClick={() => get()}>Get Product</button>
      <input
        placeholder="Add new product"
        onChange={(e) => getName(e.target.value)}
      ></input>
      <button onClick={() => addProduct(name)}>Add product</button>
    </div>
  );
};
