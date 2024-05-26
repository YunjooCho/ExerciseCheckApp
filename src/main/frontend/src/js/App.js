import Router from "./utils/router";
import NavBar from "./component/NavBar";

export default class App {
    constructor($container) {
        const $app = document.querySelector("#app");
        new Router($container);
        this.renderComponent($container);
    }

    renderComponent($container) {
        const navContainer = document.querySelector("#navBar");
        new NavBar(navContainer);
    };
}