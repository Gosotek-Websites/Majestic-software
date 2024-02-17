"use client";
import React from "react";
import styles from "./testCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import user1 from "./../../../../public/assets/user1.png";
import user2 from "./../../../../public/assets/user2.png";
import user3 from "./../../../../public/assets/user3.png";
import user4 from "./../../../../public/assets/user4.png";

const TestCarousel = () => {
  const data = [
    {
      user: "Vallabh Mehta",
      img: user1,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "Choosing Majestic Elevators for our office building was a decision that greatly impacted the overall efficiency and convenience for our tenants. The elevators are not only sleek and modern but also operate seamlessly, offering a smooth and safe ride. ",
    },
    {
      user: "Pramod badale",
      img: user2,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "Majestic Elevators has been an integral part of our recent mall renovation project. The installation of their elevators has not only enhanced the accessibility for our visitors but has also added a touch of sophistication to our shopping experience. ",
    },
    {
      user: "Arvind Jain",
      img: user3,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "Our experience with Majestic Elevators has been outstanding. The elevators installed in our residential building are not only stylish but also remarkably efficient. The residents appreciate the smooth and swift rides, and the maintenance team has consistently provided prompt service. ",
    },
    {
      user: "Pramod Mittal",
      img: user4,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "Our decision to choose Majestic Elevators for our office tower was driven by their reputation for excellence in the industry. The elevators installed have surpassed our expectations, offering a seamless and efficient transportation solution for our employees and visitors.",
    },
  ];

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        breakpoints={{
          464: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <center>
              <div className={styles.cardWrapper}>
                <div className={styles.card}>
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
              </div>
            </center>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestCarousel;
