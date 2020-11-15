import React,{FunctionComponent} from 'react'
import style from './style.module.scss';

export const Navigation:FunctionComponent = ()=>{
    return (
    <div className={style.input_bar}>
        <div className={style.logo}>logo</div>
        <div className={style.input}>
            <button className={style.loupe}>
                <svg viewBox="0 0 32 32">
                <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
                </svg>
            </button>
            <input placeholder="Search for photos you nead"/>
            <button className={style.discard}>
                <svg viewBox="0 0 32 32">
                <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
                </svg>
            </button>
        </div>
    </div>);
} 