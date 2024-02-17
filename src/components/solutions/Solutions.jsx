import React from "react";
import styles from "./solutions.module.css";
import sol1 from "./../../../public/assets/sol1.png";
import sol2 from "./../../../public/assets/sol2.png";
import sol3 from "./../../../public/assets/sol3.png";
import sol4 from "./../../../public/assets/sol4.png";
import sol5 from "./../../../public/assets/sol5.png";
import sol6 from "./../../../public/assets/sol6.png";
import sol7 from "./../../../public/assets/sol7.png";
import sol8 from "./../../../public/assets/sol8.png";
import sol9 from "./../../../public/assets/sol9.png";
import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
  const data = [
    {
      id: 1,
      title: "Banking",
      desc: "Ranging from ATM Surveillance to Branch Surveillance to Cash Van Surveillance to Central Control...",
      img: sol1,
    },
    {
      id: 2,
      title: "Campus",
      desc: "With school and university managers becoming accountable for campus security, surveillance...",
      img: sol2,
    },
    {
      id: 3,
      title: "Hospitality / Health Care",
      desc: "Surveillance stands as a critical need of the hospitality industry today. Majestic Security offers tailored...",
      img: sol3,
    },
    {
      id: 4,
      title: "Industrial",
      desc: "Manufacturing facilities and warehouses are stocked up with raw materials, WIP or finished goods at all times and ther...",
      img: sol4,
    },
    {
      id: 5,
      title: "Law Enforcement",
      desc: "Police forces fulfill the arduous task of ensuring peace and order within a city/ state. Managing a bustling population...",
      img: sol5,
    },
    {
      id: 6,
      title: "Oil & Gas",
      desc: "Oil & Gas sites are often remote and isolated with assets spread across large areas and multiple locations. Such chal...",
      img: sol6,
    },
    {
      id: 7,
      title: "Real Estate",
      desc: "Solutions for under-construction sites to furnished structures and more, Majestic Security caters to a wide...",
      img: sol7,
    },
    {
      id: 8,
      title: "Retail",
      desc: "Shoplifting, theft and cashier fraud make up for a significant percentage of the losses incurred by retail...",
      img: sol8,
    },
    {
      id: 9,
      title: "Safe City",
      desc: "City surveillance is important for ensuring the safety and security of citizens, and deterring crime. By choos...",
      img: sol9,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.head}>Our Solutions</div>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={item.img}
              className={styles.img}
              width={1000}
              style={{ height: "auto" }}
              alt="Solution"
            />
            <div className={styles.info}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
              <Link
                className={styles.link}
                href={{
                  pathname: `/solutions/${item.id}`,
                }}
              >
                Explore Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
