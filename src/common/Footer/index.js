import React,{Component} from 'react';
import './index.less';
import {Row} from 'antd'

export default class Footer  extends Component{
    render(){
        return (
            <Row className='footer'>
                <span>Created ©2019 夜明如镜 闽ICP备18019123号</span>
            </Row>
        )
    }
}