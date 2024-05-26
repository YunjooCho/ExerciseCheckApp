import Home from "../component/Home.js";
import NotFound from "../component/notFound.js";

export const BASE_URL = "http://127.0.0.1:8089";

export const routes = [
    { path: /^\/$/, element: Home },
    { path: /.*/, element: NotFound },
];