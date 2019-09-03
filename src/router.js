import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/index';
import LoginUser from './layouts/LoginUser/index';

export default class RouterWrap extends Component{
     state = {
         issues: []
     };

    render() {
        return(
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={LoginUser}/>
                        <Route path="/home" component={DefaultLayout}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}