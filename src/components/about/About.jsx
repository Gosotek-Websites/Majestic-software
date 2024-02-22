import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import about from "./../../../public/assets/about.png";

const About = () => {
	return (
		<div className={styles.container} id="about">
			<div>
				<Image
					src={about}
					className={styles.img}
					width={500}
					style={{ height: "auto" }}
					placeholder="blur"
				/>
			</div>

			<div className={styles.info}>
				<div className={styles.title1}>ABOUT US</div>
				<div className={styles.title2}>
					We help you embark on a tech journey empowered by our
					seamless solutions.
				</div>
				<div className={styles.desc}>
					Welcome to Majestic Systems and Softwares, where technology
					meets simplicity. We take pride in offering a curated
					selection of computer systems, printers, accessories,
					software, and networking solutions. Our focus is on
					providing reliable, user-friendly products that seamlessly
					integrate into your daily life. With a commitment to
					customer satisfaction, we strive to make your technology
					experience straightforward and enjoyable. Explore our range
					and discover the convenience of modern technology with
					Majestic Systems and Softwares.
				</div>
			</div>
		</div>
	);
};

export default About;
