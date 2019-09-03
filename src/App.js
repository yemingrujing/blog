import React, {Component} from 'react';
import RouterWrap from './router';
import Music from './common/Music/index'
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <RouterWrap/>
                {/* 音乐组件 */}
                <Music/>
            </div>
        );
    }
}

export default connect()(App);
