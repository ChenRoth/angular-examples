import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-receiver',
    templateUrl: './event-receiver.component.html',
    styleUrls: ['./event-receiver.component.css']
})
export class EventReceiverComponent implements OnInit {
    eventTimestamp: number;

    updateTimestamp(eventData: number) {
        this.eventTimestamp = eventData;
    }

    constructor() { }

    ngOnInit() {
    }

}
