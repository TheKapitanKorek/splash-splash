import React,{FunctionComponent} from 'react';
import style from './style.module.scss';

interface Props{
    image: string;
    author: string;
    location: string;
    setPhoto: Function;
}

const Overlay:FunctionComponent<Props> = ({image,author,location,setPhoto})=>{
    return(<div className={style.overlay} onClick={()=>{setPhoto(undefined)}}>
        <div className={style.content} onClick={()=>{setPhoto(undefined)}}>
            <div className={style.description}>
                <div className={style.info}>
                    Author name: <span className={style.bold}>{author}</span>
                </div>
                <div className={style.info}>
                    Location: <span className={style.bold}>{location}</span>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} alt={author}/>
            </div>
        </div>
        <button className={style.cancel_button} onClick={()=>{setPhoto(undefined)}}>
        <svg viewBox="0 0 32 32">
                <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
        </svg>
        </button>
    </div>)
};

export default Overlay;