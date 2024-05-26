import Component from "./Component";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import * as FullCalendar from "@fullcalendar/core";
export default class Home extends Component {
    setup() {
        this.state = { home: ['home1', 'home2']};
    }

    template() {
        const { home } = this.state;
        return `
            <div class="homeComponent default-container">
                <h1>Check Your Current Status</h1>
                <div ></div>
                <div id="calendar" class="calendarContent"></div>
            </div>
        `;
    }

    renderCalendar() {
        let calendarEl = document.getElementById('calendar');
        let calendar = new Calendar(calendarEl, {
            plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            },
            aspectRatio: 2,
        });
        calendar.render();
    }

    setEvent() {
        this.renderCalendar();
    }
}