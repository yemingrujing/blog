import React, {Component} from 'react';
import {} from 'react-router-dom';
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
                <Header></Header>
                <div className="content-wrap">
                    
                </div>
                <Footer></Footer>
            </div>
        )
    }
}