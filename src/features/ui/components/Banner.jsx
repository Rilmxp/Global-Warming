import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <header className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Our Battle Against Climate Change Begins with Knowledge</h1>
        <blockquote>
          <p>
            “Education is the most powerful weapon which you can use to change
            the world.” -Nelson Mandela
          </p>
        </blockquote>
      </div>
    </header>
  );
};

export default Banner;
