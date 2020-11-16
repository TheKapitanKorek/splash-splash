import React, {FunctionComponent} from 'react';
import style from './style.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Landing from '../Landing';
import Navigation from "../Navigation";
import Photos from '../Photos';
    
const App:FunctionComponent = ()=>{

    return(
    <Router>
        <div id={style.App}>
        <Navigation />
        <Switch>
            <Route path="/" exact>
                <Landing/>
            </Route>
            <Route path="/photos/:query" exact>
                
                <Photos/>
            </Route>
        </Switch>
        </div>
    </Router>);
};
export default App;