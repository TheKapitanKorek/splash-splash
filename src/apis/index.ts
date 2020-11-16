import axios from 'axios'
import words from './words';
import {AccessKey} from '../APIkeys';

const APIurl = "https://api.unsplash.com/"
const photosPerPage = 30;

export const getPhotos = async(page:number = 1,query:string)=>{
    const result = await axios.get(`${APIurl}search/photos?page=${page}&per_page=${photosPerPage}&query=${query}&client_id=${AccessKey}`);
    return result;
}

export const getAutocomplete = (query:string)=>{
    const matches = words.filter(el=>el.indexOf(query)!==-1);
    return matches.splice(0,5);
}