import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

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
            cover: "https://p3fx.kgimg.com/stdmusic/20150303/20150303113649415139.jpg",
            musicSrc: "http://audio01.dmhmusic.com/71_53_T10046213504_320_4_1_0_sdk-cpm/0207/M00/66/19/ChR461srkuKAHZqIAJmDv7_X8YA040.mp3?xcode=07d81b418222445350418534263fdbc5d079d97"
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

export default class Music extends React.Component {

    render() {
        return (
            <div>
                <ReactJkMusicPlayer {...options} />
            </div>
        );
    }
}