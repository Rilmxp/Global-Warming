import Carousel from "react-bootstrap/Carousel";
import { nanoid } from "nanoid";
import { quotations } from "../../../data/contentData";

import styles from "./TextCarousel.module.scss";

function TextCarousel() {
  return (
    <Carousel
      className={styles.carousel}
      prevIcon={null}
      nextIcon={null}
      nextLabel={null}
      prevLabel={null}
      indicators={false}
    >
      {quotations.map((item) => {
        return (
          <Carousel.Item interval={4000} key={nanoid()}>
            <q>{item.quotation}</q>
            <p className={styles.author}>- {item.author}</p>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default TextCarousel;
