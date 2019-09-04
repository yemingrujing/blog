import React, {Component} from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const axios = require('axios');
var input = '预谋';
var url = 'http://49.234.39.74:8000/api/get/music/info?input=';
// var request = require('request');
// request(url + input, function(error, response, body) {
//     console.log(body);// 请求成功的处理逻辑
//     if (!error && response.statusCode === 200) {
//         console.log(body);// 请求成功的处理逻辑
//     }
// });


// const axios = require('axios');
// var data = new FormData();
// data.append('input', '预谋');
// data.append('filter', 'name');
// data.append('type', 'qq');
// data.append('page', 1);
//
// axios.post('http://music.wandhi.com/', data,
// {
//   headers: {
//     'Accept': 'application/json, text/javascript, */*; q=0.01',
//     'Origin': 'http://music.wandhi.com',
//     'Referer': 'http://music.wandhi.com/?name=%E9%A2%84%E8%B0%8B&type=qq',
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     'Cookie': 'UM_distinctid=16cef9f2e05372-01aa878edcc4eb-e343166-1fa400-16cef9f2e067c; CNZZDATA1274607868=229460881-1567382950-%7C1567410387'
//   }
// }).then(function(response){
//   console.log(response);
// });

const options = {
    //audio lists model
    audioLists: [
        {
            name: "红昭愿",
            singer: "音阙诗听",
            cover: "https://p3fx.kgimg.com/stdmusic/20170407/20170407225248906484.jpg",
            musicSrc: "https://music.163.com/song/media/outer/url?id=452986458.mp3"
        },
        {
            name: "青丝（Cover 时光胶囊）",
            singer: "岚之调",
            cover: 'https://p3fx.kgimg.com/stdmusic/20150714/20150714151925584566.jpg',
            musicSrc: "https://music.163.com/song/media/outer/url?id=476283574.mp3"
        },
        {
            name: "近我者甜呀（Cover：群星）",
            singer: "黑猫",
            cover: "https://p3fx.kgimg.com/stdmusic/20190118/20190118100246286307.jpg",
            musicSrc: "https://music.163.com/song/media/outer/url?id=1295675823.mp3"
        },
        {
            name: "哥只是个传说",
            singer: "陈旭",
            cover: "https://p3fx.kgimg.com/stdmusic/20150718/20150718074455970324.jpg",
            musicSrc: "https://music.163.com/song/media/outer/url?id=69611.mp3"
        },
        {
            name: "预谋",
            singer: "许佳慧",
            cover: "",
            musicSrc: ""
        }
    ],

    //default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: "dark",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    bounds: "body",

    //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: true,

    //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: false,

    //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    //The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
        bottom: 20,
        left: 20
    },

    // play mode text config of the audio player
    playModeText: {
        order: "顺序播放",
        orderLoop: "列表循环",
        singleLoop: "单曲循环",
        shufflePlay: "随机播放"
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: "打开",

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: "关闭",

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: "开",

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: "关",

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: "暂无音乐",

    panelTitle: "播放列表",

    defaultPlayMode: "order",

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: "mini",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: true,

    //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: true,

    //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    //drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    // controllerTitle: <FaHeadphones />,

    //Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    //Music is downloaded handle

};

export default class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }


    componentDidMount() {
        const _this = this;
        let musicUrl = null;
        axios.get(url + input).then(function(response){
            let data = response.data.data;
            musicUrl = data[0].url;
            options.audioLists[options.audioLists.length - 1]['musicSrc'] = data[0].url;
            options.audioLists[options.audioLists.length - 1]['cover'] = data[0].pic;
            _this.setState({
                isLoaded: true
            });
        }).catch(function (error) {
            console.log(error);
            _this.setState({
                isLoaded: false,
                error: error
            })
        });
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <ReactJkMusicPlayer {...options} />
                </div>
            );
        } else {
             return <div>Loading</div>
        }
    }
}
