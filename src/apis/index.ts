import axios from 'axios'
import {AccessKey} from '../APIkeys';

const APIurl = "https://api.unsplash.com/"
const photosPerPage = 30;

export const getPhotos = async(page:number = 1,query:string)=>{
    const result = await axios.get(`${APIurl}search/photos?page=${page}&per_page=${photosPerPage}&query=${query}&client_id=${AccessKey}`);
    console.log(result);
    return result;
}

export const getAutocomplete = async(phrase:string)=>{
    const result = await axios.get(`${APIurl}/topics?id_or_slug=${phrase}&client_id=${AccessKey}`);
    console.log(result);
    return result;
}