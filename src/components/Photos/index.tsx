import React, { FunctionComponent, useState, useEffect } from "react";
import Photo from "../Photo";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";
import Overlay from "../Overlay";
import { getPhotos } from "../../apis";

interface PhotoProps {
  author: string;
  location: string;
  imageURL: string;
  bigImage: string;
  alt: string;
}

const PhotoList: FunctionComponent = () => {
  const { query }: { query: string } = useParams();
  const page = 1;
  const [selectedPhoto, setSelectedPhoto] = useState<any>(undefined);
  const [photos, setPhotos] = useState<PhotoProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPhotos(page, query);
        const formated: any = response.data.results.map((el: any) => {
          return {
            author: el?.user?.name ? el.user.name : "unknown",
            location: el?.user?.location ? el.user.location : "unknown",
            imageURL: el.urls.small,
            bigImage: el.urls.full,
            alt: el.alt_description,
          };
        });
        setPhotos(formated);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [query]);

  return (
    <div className={style.wrapper}>
      <div className={style.page}>
        <h1>{query.replace("-", " ")}</h1>
        {photos.length > 0 ? (
          <div className={style.photos}>
            {photos.map((photo) => (
              <Photo
                key={photo.imageURL}
                setPhoto={setSelectedPhoto}
                author={photo.author}
                imageURL={photo.imageURL}
                bigImage={photo.bigImage}
                location={photo.location}
                alt={photo.alt}
              />
            ))}
          </div>
        ) : (
          <h2>No results found</h2>
        )}
      </div>
      {selectedPhoto ? (
        <Overlay
          author={selectedPhoto!.author}
          location={selectedPhoto!.location}
          image={selectedPhoto.image}
          setPhoto={setSelectedPhoto}
        />
      ) : null}
    </div>
  );
};

export default PhotoList;