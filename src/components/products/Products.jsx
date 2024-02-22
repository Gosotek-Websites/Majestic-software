import React from "react";
import styles from "./products.module.css";
import cam1 from "./../../../public/assets/item1.png";
import cam2 from "./../../../public/assets/item2.png";
import cam3 from "./../../../public/assets/item3.png";
import cam4 from "./../../../public/assets/item4.png";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
	const data = [
		{
			title: "Computer Systems",
			desc: "Explore our extensive selection of cutting-edge computer systems, designed to elevate your computing experience with top-tier performance and innovative features.",
			img: cam1,
			link: "",
		},
		{
			title: "Printer and Accessories",
			desc: "Explore our expansive collection of top-tier printers and accessories, meticulously designed to deliver precision and offer seamless solutions for all your diverse needs.",
			img: cam2,
			link: "",
		},
		{
			title: "Softwares",
			desc: "Immerse yourself in our extensive array of thoughtfully crafted, innovative software solutions, designed to elevate and simplify your entire digital experience seamlessly.",
			img: cam3,
			link: "",
		},
		{
			title: "Networking and Cybersecurity",
			desc: "Discover secure, seamless online experiences with our advanced Networking and Cybersecurity solutions, thoughtfully tailored to meet your evolving needs.",
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
