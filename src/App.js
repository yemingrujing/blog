import React, {Component} from 'react';
import RouterWrap from './router';
import Music from './common/Music/index'
import { connect } from 'react-redux';
import { issuesList } from './redux/action';
import './App.css';

class App extends Component {

    state = {
        issues: []
    };

    componentDidMount(): void {
        this.getPageData();
    }

    getPageData = () => {
        fetch("/news", {method: "GET"}).then((res) =>
             {
                res.json().then((data) => {
                    const { dispatch } = this.props;
                    dispatch(issuesList(data));
                });
            }
        )
    };

    render() {
        return (
            <div className="App">
                <div id='to-header'></div>
                <RouterWrap/>
                {/* 音乐组件 */}
                <Music/>
            </div>
        );
    }
}

export default connect()(App);
