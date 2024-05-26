import { $ } from "./utils/querySelector.js";
import App from "./App.js";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

window.bootstrap = bootstrap;
window.addEventListener("DOMContentLoaded", (e) => {
    new App($("#app"));
});