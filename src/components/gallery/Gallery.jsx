import React from "react";
import styles from "./gallery.module.css";
import Image from "next/image";

import gallery1 from "../../../public/assets/Gallery/gallery1.png";
import gallery2 from "../../../public/assets/Gallery/gallery2.png";
import gallery3 from "../../../public/assets/Gallery/gallery3.png";
import gallery4 from "../../../public/assets/Gallery/gallery4.png";
import gallery5 from "../../../public/assets/Gallery/gallery5.png";
import gallery6 from "../../../public/assets/Gallery/gallery6.png";
import gallery7 from "../../../public/assets/Gallery/gallery7.png";

const images = [
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
	gallery7,
];

const Gallery = () => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>Gallery</div>
			<div className={styles.gallery}>
				{images.map((img, index) => (
					<Image
						key={index}
						className={styles.galleryImg}
						src={img}
						alt="gallery"
					/>
				))}
			</div>
		</div>
	);
};

export default Gallery;
