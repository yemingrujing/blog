import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Row, Col} from 'antd';
import Header from '../../common/Header/index';
import Footer from '../../common/Footer/index';
import Right from '../../common/Right/index';
import About from '../../routes/About/index';
import Article from '../../routes/Article/index';
import Home from '../../routes/Home/index';
import Resource from '../../routes/Resource/index';
import './index.less';
import Blog from "../../components/blog";
import {connect} from "react-redux";

class DefaultLayout extends Component {
    render() {
        return(
            <div id="DefaultLayout">
                <Header/>
                <Row className='bg'>
                    <Row style={{marginTop:20}}>
                        <Col xs={1} xm={1} md={1} lg={1} xl={3} xxl={4}/>
                        <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={16}>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                                    <Route exact path={this.props.match.url+"/"} component={Home}/>
                                    <Route path={this.props.match.url+"/about"} component={About}/>
                                    <Route path={this.props.match.url+"/article"} component={Article}/>
                                    <Route path={this.props.match.url+"/resource"} component={Resource}/>
                                    <Route path={this.props.match.url+"/blog/:number"} component={Blog} />
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={{span:6,offset:1}} xl={{span:6,offset:1}} xxl={{span:6,offset:1}}>
                                    <Right/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        issues: state.issues
    }
};

export default connect(mapStateToProps)(DefaultLayout)