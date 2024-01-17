import Image from "next/image";
import React, { useState } from "react";

function ImageSwitch({ images }) {
  const [image, setImage] = useState(images.before);

  const switchImage = () => {
    if (image === images.before) {
      setImage(images.after);
    } else {
      setImage(images.before);
    }
  };
  return (
    <li>
      <Image src={image} alt={""} onClick={switchImage} />
    </li>
  );
}

export default ImageSwitch;
