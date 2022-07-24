import React from "react";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}></h1>
      <h2 className={styles.margin}>Introduction</h2>
      <p className={styles.grey}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, deleniti
        ab exercitationem sit hic unde quo dignissimos, corporis qui libero
        dolorum. Fugiat libero animi sed veritatis molestias! Dolore, nisi.
        Aperiam debitis dignissimos eum dolorem deserunt, minus alias a ipsam
        atque odio natus reiciendis, ipsa maiores incidunt suscipit eaque
        necessitatibus perspiciatis, recusandae consequatur corporis! Facilis,
        facere? Ipsa odio officia quibusdam rerum eos at optio quod consequuntur
        officiis, culpa veniam earum nemo expedita consequatur et itaque modi?
      </p>
      <h2>Services Offered</h2>
      <p className={styles.grey}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus
        recusandae temporibus itaque deleniti voluptatum incidunt perferendis
        reiciendis amet laboriosam ipsam earum voluptates asperiores expedita
        beatae dolore accusantium praesentium quia enim adipisci, omnis aut
        quidem.
      </p>
      <ul className={styles.grey}>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <li>Service 4</li>
        <li>Service 5</li>
      </ul>
      <h2>Contact Us</h2>
      <p className={styles.grey}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sed
        aperiam consequuntur nobis accusantium exercitationem vero saepe
        suscipit laudantium magnam cumque dignissimos quae, velit iusto nostrum
        amet sunt voluptas, cum nihil neque. Dignissimos, quae deserunt.
      </p>
    </div>
  );
};

export default about;
