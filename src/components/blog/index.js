import React, {Component} from 'react';
import { Row , Card, message , Tag } from 'antd';
import './index.less';
import axios from 'axios';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import { TimeUpdate, ScrollToAnchor} from '../../utils';
const { Meta } = Card;

class blog extends Component{

    state = {
        issuesInfo: [],
        isLoaded: false,
        path: '',
        talk: true,
    }

    render() {
        return(
            <div id="Article">
                文章
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps)(blog)