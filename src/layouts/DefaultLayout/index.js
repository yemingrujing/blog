import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Header from '../../common/Header/index';
import Footer from '../../common/Footer/index';
import About from '../../routes/About/index';
import Article from '../../routes/Article/index';
import Home from '../../routes/Home/index';
import Resource from '../../routes/Resource/index';
import './index.less';

export default class DefaultLayout extends Component {
    render() {
        return(
            <div id="DefaultLayout">
                <Header/>
                <div className="content-wrap">
                    <Route exact path={this.props.match.url+"/"} component={Home}/>
                    <Route path={this.props.match.url+"/about"} component={About}/>
                    <Route path={this.props.match.url+"/article"} component={Article}/>
                    <Route path={this.props.match.url+"/resource"} component={Resource}/>
                </div>
                <Footer/>
            </div>
        )
    }
}