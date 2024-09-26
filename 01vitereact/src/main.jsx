import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import {jsx as jsx} from 'react/jsx-dev-runtime'


function MyApp() {
    return (
        <div>
            <h1>this is my app !</h1>
        </div>
    );
}

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement = (
    <a href="https.//google.com" target="_blank">
        visit to google
    </a>
);
const username= 'sharkmite'
const reactElement = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "click to visit google",
    username
);

createRoot(document.getElementById("root")).render(
    //  reactElement
    // // anotherElement
    // //reactElement
    <App />
);
