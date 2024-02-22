import Image from "next/image";
import styles from "./page.module.css";
import hero from "./../../public/assets/hero.png";
import Form from "@/components/form/Form";
import About from "@/components/about/About";
import Products from "@/components/products/Products";
import Solutions from "@/components/solutions/Solutions";
import Choose from "@/components/choose/Choose";
import Testimonials from "@/components/testimonials/Testimonials";
import ShopBtn from "@/components/shopBtn/ShopBtn";
import SecurityForm from "@/components/securityForm/SecurityForm";
import Shop from "@/components/shop/Shop";
import Gallery from "@/components/gallery/Gallery";
import Video from "@/components/video/Video";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.heroSection}>
				<Image
					src={hero}
					className={styles.heroImg}
					fill
					placeholder="blur"
				/>
				<div className={styles.hero}>
					<div className={styles.heroInfo}>
						<div className={styles.heroTitle}>
							Immerse in the excellence of powerful, sophisticated
							systems and software solutions.
						</div>
						<div className={styles.heroDesc}>
							We provide unparalleled system solutions and
							softwares, meticulously designed to meet your needs
							and offer steadfast support in demanding situations.
						</div>
					</div>
					<Form />
				</div>
			</div>

			<About />
			<Products />
			{/* <ShopBtn /> */}
			{/* <Solutions /> */}
			<Choose />
			<Gallery />
			{/* <SecurityForm /> */}
			<br />
			<br />
			<Shop />
			<Video />
			<Testimonials />
		</div>
	);
}
