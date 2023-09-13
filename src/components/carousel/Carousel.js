import React, { useState } from "react";
import { imageList } from "../../utils/image-list";
import styles from "./Carousel.module.css";
import BackButton from "../ui/buttons/BackButton/BackButton";
import ForwardButton from "../ui/buttons/ForwardButton/ForwardButton";
import Image from "../ui/image/Image";

const Carousel = () => {
  const [currentImageLoc, setCurrentImageLoc] = useState(0);
  const currentImage = imageList[currentImageLoc];

  const moveBack = () => {
    setCurrentImageLoc((prev) => {
      if (prev === 0) return imageList.length - 1;
      return prev - 1;
    });
  };
  const moveForward = () => {
    setCurrentImageLoc((prev) => {
      if (prev === imageList.length - 1) return 0;
      return prev + 1;
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Carousel</h1>
      <div className={styles.carousel}>
        <BackButton onClick={moveBack} />
        <div className={styles["image-wrapper"]}>
          <Image
            src={currentImage.src}
            description={currentImage.description}
          />
        </div>
        <ForwardButton onClick={moveForward} />
      </div>
    </div>
  );
};

export default Carousel;
