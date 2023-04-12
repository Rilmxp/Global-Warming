import TextCarousel from "./TextCarousel";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <header className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Our Battle Against Climate Change Begins with Knowledge</h1>
        <div className={styles.layout}>
          <TextCarousel />
        </div>
      </div>
    </header>
  );
};

export default Banner;
