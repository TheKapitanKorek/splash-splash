import React,{FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './style.module.scss';
import { useHistory } from "react-router-dom";

import {getAutocomplete} from '../../apis';

interface SugestionListProps {
    results?:string[];
}

const SugestionList:FunctionComponent<SugestionListProps> = ({results})=>{

const sugestions = results!.map(el=>{return <Link to={`/photos/${el.replace(" ","-")}`}><div className={style.sugestion}>{el}</div></Link>});

if(sugestions.length>0){
    return(<div className={style.sugestion_list}>
        {sugestions}
    </div>)}
else{
    return<div className={style.no_sugestion}>Sorry no suggestions so far</div>
}
} 

interface SearchBarProps {
    value: string,
    setValue: Function
    big?:boolean;
};

const SearchBar:FunctionComponent<SearchBarProps> = ({value,setValue,big})=>{

    let results

    if(value.length > 2){
       results = getAutocomplete(value);
    }

    const history = useHistory()

    return(<div className={style.container}>
        <div className={style.input} id={big?style.big:""}>
            <button className={style.loupe}>
                <svg viewBox="0 0 32 32">
                <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
                </svg>
            </button>
            <input placeholder="Search for photos you need" value={value} 
            onChange={(e)=>{setValue(e.target.value)}} 
            onKeyDown={(e)=>{
                if(e.key==="Enter" && value.length>0){
                    history.push(`/photos/${value.replace(" ","-")}`);
                    setValue("");
                }
            }}
            />
            <button className={style.discard} onClick={(e)=>{e.preventDefault(); setValue("")}}>
                <svg viewBox="0 0 32 32">
                <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
                </svg>
            </button>
        </div>
        {value.length>2?<SugestionList results={results}/>:null}
        </div>
    )
}

export default SearchBar;