import React, {Component} from 'react';
import { Row, Card, Icon , Col, Tag, Pagination} from 'antd';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import QueueAnim  from 'rc-queue-anim';
import './index.less'
const {Meta} = Card;

class Home extends Component{
    state = {
        // 设置一个状态来保存当前页码的文档
        nowPageIssues: [],
        // 当前选中的页码
        page: 1,
        // 一页的数量
        pageNum: 8,
    };

     componentDidMount(): void {
        const { issues } = this.props;
        const { page, pageNum }= this.state;
        this.setState({ nowPageIssues: issues.slice(pageNum * (page - 1), pageNum + pageNum * (page - 1))})
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {issues} = nextProps;
        const {page, pageNum} = prevState
        if (issues !== prevState.issues) {
            return {nowPageIssues: issues.slice(pageNum * (page - 1), pageNum + pageNum * (page - 1))};
        }
        return null;
    }

    pageChange = (page, pageSize) => {
        const {pageNum} = this.state;
        const {issues} = this.props;
        this.setState({ page, nowPageIssues: issues.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1))})
    }

    render() {
        const {issues} = this.props;
        const {nowPageIssues, page, pageNum} = this.state;
        return(
            <Row style={{width: '100%', height: '100%'}}>
                <QueueAnim animConfig={[
                    {opacity: [1, 0], translateY: [0, 150]},
                    {opacity: [1, 0], translateY: [0, -150]}
                ]}>
                    {
                        nowPageIssues && nowPageIssues.length ? (nowPageIssues.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    style={{ width: "100%", marginBottom:20}}
                                >
                                    <Meta
                                        title={<h3><Link to={`/home/blog/${item.number}`}>{item.title}</Link></h3>}
                                        description={
                                            <Row>
                                                <Row style={{display:'flex'}}>
                                                    <Col style={{marginRight:5}}>
                                                        <Icon type="calendar" style={{ marginRight: 5 }} />
                                                        {item.created_at}
                                                    </Col>
                                                    <Col>
                                                        <Icon type="tags-o" style={{ fontSize: 20,marginRight:5}}/>
                                                        {
                                                            item.labels &&item.labels.length?(
                                                                item.labels.map((vitem,vindex)=>{
                                                                    return(
                                                                        <Tag style={{fontSize:16}} key={vindex} color={`#${vitem.color}`}>{vitem.name}</Tag>
                                                                    );
                                                                })
                                                            ):null
                                                        }
                                                    </Col>
                                                </Row>
                                                <Row style={{marginTop:20}}>
                                                    <Col>
                                                        <p className='index-blog-content'>{item.body}</p>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        }
                                    />
                                </Card>
                            )
                        })):null
                    }
                     <Pagination
                        current={page}
                        total={issues.length}
                        pageSize={pageNum}
                        onChange={(page, pageSize) => this.pageChange(page, pageSize)}
                        hideOnSinglePage={true}
                        style={{display: 'flex',justifyContent: 'center',marginBottom:15}}
                    />
                </QueueAnim>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        issues: state.issues
    }
};

export default connect(mapStateToProps)(Home);