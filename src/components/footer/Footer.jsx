import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import location from "./../../../public/assets/location.png";
import ig from "./../../../public/assets/ig.svg";
import li from "./../../../public/assets/li.svg";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.upper}>
				<div className={styles.head}>Majestic Softwares</div>
				<div className={styles.desc}>
					Majestic Softwares seeks to foster a community of trustable
					and reliable professionals to ease the burden of life on
					you. Spreading the magic of professional assistance
					everywhere, one client at a time.
				</div>
				<div className={styles.location}>
					<Image
						src={location}
						className={styles.locImg}
						width={1000}
						style={{ height: "auto" }}
						alt="Location"
					/>
					<div className={styles.locText}>Kota, Rajasthan</div>
				</div>

				<div className={styles.social}>
					<Link href="/">
						<Image
							src={li}
							width={20}
							className={styles.ig}
							alt="img"
						/>
					</Link>
					<Link href="/">
						<Image
							src={ig}
							width={20}
							className={styles.ig}
							alt="img"
						/>
					</Link>
				</div>
			</div>
			<div className={styles.lower}>
				<div className={styles.left}>
					All Rights Reserved. Powered by{" "}
					<Link
						href="https://gosotek.com/"
						className={styles.gosotek}
					>
						Gosotek
					</Link>
				</div>
				<Link
					href={"mailto:enquiry@majesticsecurity.com"}
					className={styles.right}
				>
					enquiry@majesticsoftwares.com
				</Link>
			</div>
		</div>
	);
};

export default Footer;
