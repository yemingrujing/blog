import React, {Component} from 'react';
import { Row , Card, message , Tag } from 'antd';
import './index.less';
import axios from 'axios';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import { CONFIG } from '../../config';
import { TimeUpdate, ScrollToAnchor} from '../../utils';
const { Meta } = Card;

class blog extends Component{

    state = {
        issuesInfo: [],
        isLoaded: false,
        path: '',
        talk: true,
        number: this.props.match.params.number,
    };

    componentDidMount(): void {
        ScrollToAnchor();
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });
        this.getBlogApiInfo(this.props.match.params.number);
        this.setState({ path: this.props.match.params.number})
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        ScrollToAnchor();
        if (prevState.number !== nextProps.match.params.number) {
            return {
                path: nextProps.match.params.number,
                talk:false,
            }
        }
        return null;
    }

    // 通过路由传来的参数去获取文档
    getBlogApiInfo(path) {
        this.setState({ issuesInfo: [], isLoaded: true});
        const self = this;
        axios.get(`http://localhost:8000/api/get/blog/detail`, {
            params: {
                url: `https://api.github.com/repos/${CONFIG['owner']}/blog/issues/` + path,
                creator: 'Will0319',
                client_id: '797bcc38ff786201e149',
                client_secret: 'a50e58f138828bbe362b372eb0c52def70e7b621'
            }
        }).then((response) => {
                if (response.status === 200) {
                    // 进行时间格式统一处理
                    const data = response.data;
                    self.setState({ issuesInfo: data, isLoaded: false, talk:true})
                }
            }).catch(function (error) {
                    message.warning('文章不存在');
            });
    }

    render() {
        const { issuesInfo, isLoaded ,talk} = this.state;
        return(
            <Row style={{color:'#fff',marginBottom:20}}>
                <Card
                    style={{ width: '100%' }}
                    isLoaded={isLoaded}
                >
                    <Meta
                        title={
                            issuesInfo && issuesInfo.body ? (
                                <div>
                                    <h2>{issuesInfo.title}</h2>
                                    <div style={{ fontSize: 14 }}>
                                        <span style={{marginRight:16}}>发表于 : {TimeUpdate(issuesInfo.created_at)}</span>
                                        标签 : {
                                            issuesInfo && issuesInfo.labels && issuesInfo.labels.length?(
                                                issuesInfo.labels.map((item,index)=>{
                                                    return (
                                                        <Tag style={{ fontSize: 14 }} key={index} color={`#${item.color}`}>{item.name}</Tag>
                                                    )
                                                })
                                            ):'暂无标签'
                                        }
                                    </div>
                                </div>
                            ):null
                        }
                        description={
                            issuesInfo && issuesInfo.body ? (
                                <div className='article-detail' dangerouslySetInnerHTML={{ __html: marked(issuesInfo.body) }} />
                            ) : '暂无内容...'
                        }
                    />
                </Card>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        issues: state.issues
    }
};

export default connect(mapStateToProps)(blog)