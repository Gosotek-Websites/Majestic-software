import React from "react";
import styles from "./shop.module.css";
import prod1 from "./../../../public/assets/prod1.png";
import prod2 from "./../../../public/assets/prod2.png";
import prod3 from "./../../../public/assets/prod3.png";
import prod4 from "./../../../public/assets/prod4.png";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {
	const data = [
		{
			title: "Monitor",
			desc: "Modern, Elegant Design with a Subtle Textured Pattern At the Back of the Monitor Has Its Own Unique Look.",
			img: prod1,
			price: "Rs. 8,050.00",
			link: "https://majesticsecurity.in/product/2mp-ip-full-color-night-vision-camera-s-ip-d1-c-a/",
		},
		{
			title: "White light Dome",
			desc: "Prints up to 42/40 ppm  Ethernet, USB, Wi-Fi, Bluetooth, Touchscreen",
			img: prod2,
			price: "Rs. 36,339.00",
			link: "https://majesticsecurity.in/product/4mp-white-light-dome/",
		},
		{
			title: "Smart Wifi Cam",
			desc: "Linux-based Internet-sharing Router with built-in 4-port Switch and Wireless-G Access Point",
			img: prod3,
			price: "Rs. 18,200.00",
			link: "https://majesticsecurity.in/product/smart-wifi-2mp-pan-tilt-camera-s-pt10/",
		},
		{
			title: "Assembled Intel® Core ",
			desc: "(8M Cache, 2.60 GHz) (16 GB RAM/NVIDIA GeForce  GB DDR3 Graphics Card /1 TB Hard Disk/128 GB SSD",
			img: prod4,
			price: "Rs. 17,999.00",
			link: "https://majesticsecurity.in/product/wireless-video-doorbell/",
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.head}>Shop Now</div>
			<div className={styles.cards}>
				{data.map((item, index) => (
					<div className={styles.card} key={index}>
						<Image
							src={item.img}
							className={styles.img}
							width={1500}
							style={{ height: "auto" }}
							placeholder="blur"
							alt="Product"
						/>
						<div className={styles.info}>
							<div className={styles.title}>{item.title}</div>
							<div className={styles.desc}>{item.desc}</div>
							<div className={styles.price}>{item.price}</div>
						</div>
						<Link href={item.link} className={styles.btn}>
							BUY NOW
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;
