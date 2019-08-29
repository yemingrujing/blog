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
                        <Route path="/" component={DefaultLayout}  exact />
                        <Route path="/login" component={LoginUser} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}