import React,{Component} from 'react';
import {Row, Col, Menu, Icon, Affix} from 'antd';
import {Link} from 'react-router-dom'
import './index.less';

export default class Header extends Component {
    state = {
        current: 'home',
    };

    handleClick=(e)=>{
        this.setState({current: e.key})    
    };

    render(){
        return (
            <div id="Header">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Icon type="global" className="nav-logo" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu selectedKeys={[this.state.current]} mode="horizontal" onClick={this.handleClick}>
                            <Menu.Item key="home">
                                <Link to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/home/about">关于我</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/home/article">文章分享</Link>
                            </Menu.Item>
                            <Menu.Item key="resource">
                                <Link to="/home/resource">资源共享</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

}