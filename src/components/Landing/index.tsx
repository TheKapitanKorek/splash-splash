import React, {FunctionComponent, useState} from 'react';
import SearchBar from '../SearchBar';
import style from './style.module.scss';

const Landing : FunctionComponent = ()=>{

    const [query,setQuery] = useState("");

    return(
    <div>
        <div className={style.background}>
            <div className={style.middle_box}>
                <h1>Splash-Splash</h1>
                <div className={style.text_wrapper}>
                <h3>This is an unsplash clone that i have created as my recruitment task.</h3>
                <h3>If you are Unsplash please dont throw me in jail.</h3>
                </div>
                <SearchBar big={true} value={query} setValue={setQuery}/>
            </div>
        </div>
    </div>);
}

export default Landing;