import React, {FunctionComponent} from 'react';
import style from './style.module.scss';
interface Props {

}

export const Landing : FunctionComponent = ()=>{
    return(
    <div>
        <div className={style.background}></div>
        <input placeholder="kurwa mać"/>
    </div>);
}