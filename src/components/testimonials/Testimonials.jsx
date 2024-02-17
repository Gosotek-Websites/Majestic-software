import React from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";
import TestCarousel from "./testCarousel/TestCarousel";
import user1 from "./../../../public/assets/user1.png";
import user2 from "./../../../public/assets/user2.png";
import user3 from "./../../../public/assets/user3.png";
import user4 from "./../../../public/assets/user4.png";

const Testimonials = () => {
  const data = [
    {
      user: "Vallabh Badale",
      img: user1,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "The night vision cameras and drone cameras they provided have revolutionized our surveillance capabilities. The quality of their products is outstanding, and the level of support we received during installation and setup was unparalleled. Thanks to Majestic Security.",
    },
    {
      user: "Pramod Mehta",
      img: user2,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "Their diverse range of products, including door handle cameras, has helped us create a secure shopping environment for our customers. The advanced technology and durability of accessories have added immense value to our store's security strategy.",
    },
    {
      user: "Arvind Mewar",
      img: user3,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "The team at Majestic Surveillance and Automation understands the unique requirements of our organization and consistently delivers top-quality products. We are extremely satisfied with their professionalism and attention to detail.",
    },
    {
      user: "Pramod Jain",
      img: user4,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "The security cameras, including night vision and drone cameras, have proven to be reliable and effective. The team's knowledge of the latest technology trends in the security industry is impressive, and their commitment to customer satisfaction is unmatched. ",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.head}>Client Testimonials</div>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={item.img}
              className={styles.userImg}
              width={1000}
              style={{ height: "auto" }}
              alt="User"
            />
            <div className={styles.userInfo}>
              <div className={styles.userName}>{item.user}</div>
              <div className={styles.userCompany}>{item.company}</div>
            </div>
            <div className={styles.review}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.carousel}>
        <TestCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
