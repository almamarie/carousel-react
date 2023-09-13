import React from "react";
import styles from "./Image.module.css";

const Image = (props) => {
  return <img src={props.src} alt={props.description} className={styles.img} />;
};

export default Image;
