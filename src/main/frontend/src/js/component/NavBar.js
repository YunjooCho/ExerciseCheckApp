import Component from "./Component";

export default class NavBar extends Component {
    setup() {
        this.state = { navBar: ['navBar1', 'navBar2'] };
    }

    template() {
        const { navBar } = this.state;
        return `
            <div class="navBarComponent">
                <ul class="nav nav-underline">
                    <li class="nav-item">
                        <a class="nav-link nav-current-info active" aria-current="page" href="#">오운완 현황</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">개인 성취도 확인</a>
                    </li>
                </ul>
            </div>
        `;
    }

    setEvent() {}
}