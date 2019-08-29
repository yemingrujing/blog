import React, {Component} from 'react'
import Header from '../../common/Header/index';
import Footer from '../../common/Footer/index';
import './index.less'

export default class DefaultLayout extends Component {
    render() {
        return(
            <div id="DefaultLayout">
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}