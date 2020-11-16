import React,{FunctionComponent,useState,useEffect} from 'react';
import style from './style.module.scss';
import {
    useParams,
  } from "react-router-dom";
import Overlay from '../Overlay';
import {getPhotos} from '../../apis';

interface Photo {
    author: string,
    location:string,
    imageURL:string,
    bigImage:string,
    alt:string
}

interface PhotoListProps {
    photos: Photo[];
    setPhoto: Function;
}



const PhotoList:FunctionComponent<PhotoListProps> = ({photos,setPhoto})=>{

    return (<div className={style.photos}>
        {photos.map(el=>{
            return(
            <div className={style.photo} 
            onClick={()=>{setPhoto({author:el.author,location:el.location,image:el.bigImage});}}>
            <img src={el.imageURL} alt={el.alt} id={el.alt}/>
            </div>)
        })}
    </div>);

}

const Photos:FunctionComponent = ()=>{
    const {query}: {query:string} = useParams();
    const [page,setPage] = useState(1); //in case i want do do a infinite scroll
    const [selectedPhoto,setSelectedPhoto] = useState<any>(undefined);//I know it is not good to set typa as any but in this case its good enougth
    const [photos,setPhotos] = useState<Photo[]>([])

    useEffect(()=>{
        (async ()=>{
            try{
            const response = await getPhotos(page,query);
            const formated : any = response.data.results.map((el:any)=>{ //I know it is not good to set typa as any but in this case its good enougth
                return{
                author:el?.user?.name ? el.user.name : "unknown",
                location:el?.user?.location ? el.user.location : "unknown",
                imageURL:el.urls.small,
                bigImage: el.urls.full,
                alt: el.alt_description
            }
            });
            setPhotos([...formated,...photos])//in case i want do do a infinite scroll
            }
            catch(err){
                console.log(err);
            }
        })()

    },[query,page,photos])


    return(
        <div className={style.wrapper}>
        <div className={style.page}>
            <h1>{query.replace("-"," ")}</h1>
            {photos.length>0?
            <PhotoList photos={photos} setPhoto={setSelectedPhoto}/>:<h1>No matches found.</h1>}
        </div>
        {selectedPhoto?<Overlay author={selectedPhoto!.author}location={selectedPhoto!.location} image={selectedPhoto.image} setPhoto={setSelectedPhoto}/>:null}
        </div>
    )
}

export default Photos;