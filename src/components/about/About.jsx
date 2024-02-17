import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import about from "./../../../public/assets/about.png";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <Image
        src={about}
        className={styles.img}
        width={2000}
        style={{ height: "auto" }}
        placeholder="blur"
      />

      <div className={styles.info}>
        <div className={styles.title1}>ABOUT US</div>
        <div className={styles.title2}>We stand ready to protect you.</div>
        <div className={styles.desc}>
          Majestic Security offers a comprehensive range of advanced security
          and surveillance solutions to meet the ever-changing requirements of
          different industries. At present, we are serving many different
          verticals comprising defence, government, hotels, hospitals,
          educational institutes, homes, infrastructure, and transportation
          among others. Being a major surveillance system brand globally, we
          bring efficient, reliable, scalable, and integrated solutions to our
          customers.
        </div>
      </div>
    </div>
  );
};

export default About;
