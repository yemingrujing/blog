import React from 'react';
import RouterWrap from './router';
import Music from './common/Music/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterWrap></RouterWrap>
      {/* 音乐组件 */}
      <Music/>
    </div>
  );
}

export default App;
