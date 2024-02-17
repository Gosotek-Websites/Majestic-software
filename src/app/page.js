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

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <Image src={hero} className={styles.heroImg} fill placeholder="blur" />
        <div className={styles.hero}>
          <div className={styles.heroInfo}>
            <div className={styles.heroTitle}>
              Indulge in the assurance of cost-effective and proficient security
              solutions.
            </div>
            <div className={styles.heroDesc}>
              We deliver top-notch security services, meticulously trained to
              cater to your requirements and support you in challenging
              situations.
            </div>
          </div>
          <Form />
        </div>
      </div>

      <About />
      <Products />
      {/* <ShopBtn /> */}
      <Solutions />
      <Choose />
      <Testimonials />
      <SecurityForm />
      <br /><br />
      <Shop />
    </div>
  );
}
