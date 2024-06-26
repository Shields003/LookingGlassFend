import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#3b557c",
        },
        secondary: {
            main: "#752d46",
        },
    },
});

ReactDOM.render( <React.StrictMode >
    <ThemeProvider theme = { theme } >
    <    App / >
    </ThemeProvider> </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();