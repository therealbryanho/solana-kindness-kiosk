import React from 'react';
import styles from "../styles/Product.module.css";
import Buy from './Buy'

export default function Product({ product }) {
  const { id, name, price, description, image_url } = product;

  return (
    <div className={styles.product_container}>
      <div className={styles.image_container}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ePao0cTGG-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          <div className={styles.product_description}>{description}</div>
        </div>
        <div className={styles.product_action}>
         <br/>
          <div className={styles.buttons_container}>
            <div className={styles.sol_button}>
              <Buy itemID={id} type={'SOL'} />
            </div>
          </div>
          <div className={styles.product_price}>{price} SOL</div>
        </div>
      </div>
    </div>
  );
}