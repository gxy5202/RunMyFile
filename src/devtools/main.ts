/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-10-08 01:05:08
 */
import ReactDOM from "react-dom";
import App from "./App";

chrome.devtools.panels.create(
    'Run my file',
    '../../icons/icon_16.png',
    'index.html',
    function () {
        // const root = ReactDOM.createRoot(
        //     document.getElementById('app')
        // );

        // root.render(App);
    }
);

