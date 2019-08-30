import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/index';
import LoginUser from './layouts/LoginUser/index';

export default class RouterWrap extends Component{
    render() {
        return(
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/home" component={LoginUser}/>
                        <Route exact path="/" component={DefaultLayout}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}