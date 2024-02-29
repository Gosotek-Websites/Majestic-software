"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "./../../../public/assets/logo.png";
import hamburger from "./../../../public/assets/hamburger.png";
import Link from "next/link";
import ShopBtn from "../shopBtn/ShopBtn";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<Link href={"/"}>
				<Image
					src={logo}
					className={styles.img}
					width={1000}
					style={{ height: "auto" }}
					placeholder="blur"
					alt="Logo"
				/>
			</Link>
			<div className={styles.menu}>
				<Link className={styles.link} href="/#about">
					About
				</Link>
				<Link className={styles.link} href="/#products">
					Products
				</Link>
				<Link className={styles.link} href="/#contact">
					Contact
				</Link>
				<div className={styles.call}>Call: +91 8306877796</div>
				{/* <Link
					className={styles.sbtn}
					href="https://majesticsecurity.in/"
					target="_blank"
				>
					Shop now
				</Link> */}
			</div>
			<Image
				className={styles.hamburger}
				src={hamburger}
				width={1000}
				style={{ height: "auto" }}
				alt="Hamburger"
				onClick={() => setOpen(!open)}
			/>
			{open && (
				<div className={styles.menu2}>
					<Link
						className={styles.link}
						href="/#about"
						onClick={() => setOpen(!open)}
					>
						About
					</Link>
					<Link
						className={styles.link}
						href="/#products"
						onClick={() => setOpen(!open)}
					>
						Products
					</Link>
					<Link
						className={styles.link}
						href="/#contact"
						onClick={() => setOpen(!open)}
					>
						Contact
					</Link>
					<Link
						className={styles.link}
						href="https://majesticsecurity.in/"
						target="_blank"
					>
						Shop now
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
