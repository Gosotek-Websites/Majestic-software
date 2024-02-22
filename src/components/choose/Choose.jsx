import React from "react";
import styles from "./choose.module.css";
import choose1 from "./../../../public/assets/choose1.png";
import choose2 from "./../../../public/assets/choose2.png";
import choose3 from "./../../../public/assets/choose3.png";
import choose4 from "./../../../public/assets/choose4.png";
import choose5 from "./../../../public/assets/choose5.png";
import choose6 from "./../../../public/assets/choose6.png";
import Image from "next/image";

const Choose = () => {
	const data = [
		{
			title: "Highly motivated team",
			img: choose1,
		},
		{
			title: "Quality assurance",
			img: choose2,
		},
		{
			title: "MINIMAL RENT",
			img: choose3,
		},
		{
			title: "Innovative and customized solutions",
			img: choose4,
		},
		{
			title: "FLEXIBLE RENTAL PERIOD",
			img: choose5,
		},
		{
			title: "Wide range of products",
			img: choose6,
		},
	];
	return (
		<div className={styles.container}>
			<div className={styles.head}>Why us?</div>
			<div className={styles.cards}>
				{data.map((item, index) => (
					<div className={styles.card} key={index}>
						<Image
							src={item.img}
							className={styles.img}
							width={1000}
							style={{ height: "auto" }}
							placeholder="blur"
							alt="Why"
						/>
						<div className={styles.title}>{item.title}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Choose;
