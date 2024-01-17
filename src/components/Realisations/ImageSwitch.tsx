import Image from "next/image";
import React, { useState } from "react";
import { StaticImageData } from 'next/image';
import styles from './Realisations.module.css'; 

type ImagesType = {
  before: StaticImageData;
  after: StaticImageData;
};

function ImageSwitch({ images }: { images: ImagesType }) {
  const [image, setImage] = useState(images.before);

  const switchImage = () => {
    setImage(currentImage => currentImage === images.before ? images.after : images.before);
  };

  return (
    <li>
      <Image src={image} alt={""} onClick={switchImage} />
      <div className={styles.invisible}>
        <Image src={images.after} alt={""} />
      </div>
    </li>
  );
}

export default ImageSwitch;
