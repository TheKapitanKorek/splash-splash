import React,{FunctionComponent,useState} from 'react'
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar';
import style from './style.module.scss';



const Navigation:FunctionComponent= ()=>{

    const [query,setQuery] = useState("");

    return (
    <div className={style.input_bar}>
        <Link to="/"><div className={style.logo}>
        <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16"/></svg>
        </div>
        </Link>
        <SearchBar value={query} setValue={setQuery}/>
    </div>);
} 
export default Navigation;