import React from "react";
import styles from "./products.module.css";
import cam1 from "./../../../public/assets/cam1.png";
import cam2 from "./../../../public/assets/cam2.png";
import cam3 from "./../../../public/assets/cam3.jpg";
import cam4 from "./../../../public/assets/cam4.jpg";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const data = [
    {
      title: "WiFi Camera",
      desc: "A wireless security camera where you can monitor your space from anywhere on the earth, providing convenient and flexible security surveillance.",
      img: cam1,
      link: "",
    },
    {
      title: "IP Camera",
      desc: "A security camera that captures and transmits video and audio data over an IP network, allowing remote monitoring and recording of footage.",
      img: cam2,
      link: "",
    },
    {
      title: "HD Camera",
      desc: "An HD surveillance camera which provides high-definition video monitoring for crisp and detailed surveillance footage.",
      img: cam3,
      link: "",
    },
    {
      title: "Other Accessories",
      desc: "Accessories which amplify system capabilities, fostering customization and heightened performance for an advanced security setup.",
      img: cam4,
      link: "",
    },
  ];

  return (
    <div className={styles.container} id="products">
      <div className={styles.head}>Our Categories</div>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={item.img}
              className={styles.img}
              width={1000}
              style={{ height: "auto" }}
              placeholder="blur"
              alt="Camera"
            />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.desc}>{item.desc}</div>
            <Link className={styles.btn} href={item.link}>
              ENQUIRE NOW
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
