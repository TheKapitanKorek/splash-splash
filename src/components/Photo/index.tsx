import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import style from "./style.module.scss";

interface PhotoProps {
  setPhoto: Function;
  author: string;
  location: string;
  imageURL: string;
  bigImage: string;
  alt: string;
}

const Photo: FunctionComponent<PhotoProps> = ({
  setPhoto,
  author,
  location,
  imageURL,
  bigImage,
  alt,
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState(0);
  useEffect(() => {
    const setSpans = () => {
      const height = ref.current?.clientHeight;
      if (height) {
        setImageHeight(height);
      }
    };
    ref.current?.addEventListener("load", setSpans);
    return () => {
      ref.current?.removeEventListener("load", setSpans);
    };
  }, []);
  return (
    <div
      className={style.photo}
      style={{ gridRowEnd: `span ${Math.ceil(imageHeight / 13.5)}` }}
      onClick={() => {
        setPhoto({ author, location, image: bigImage });
      }}
    >
      <img ref={ref} src={imageURL} alt={alt} id={alt} />
    </div>
  );
};

export default Photo;