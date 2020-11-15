import React, {FunctionComponent} from 'react';
import style from './style.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import {Landing} from '../Landing';
import {Navigation} from "../Navigation";
import {Photos} from '../Photos';
import {getPhotos,getAutocomplete} from '../../apis';

interface Props {

}

export const App:FunctionComponent<Props> = ()=>{
    return(
    <Router>
        <div id={style.App}>
        <Navigation/>
        <Switch>
            <Route path="/" exact>
                <Landing/>
            </Route>
            <Route path="/photos/:query">
                
                <Photos/>
            </Route>
        </Switch>
        </div>
    </Router>);
}