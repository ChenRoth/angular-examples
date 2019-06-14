import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-emitter',
    templateUrl: './event-emitter.component.html',
    styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {
    // this component has an onTimeout event
    // and @Output lets a parent component listen to the onTimeout event
    @Output() onTimeout: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        // after the component is initialized, we count 3 seconds
        // and then emit an onTimeout event with the current date in milliseconds
        // whoever (parent) listens to this event, will get the current date as $event
        setTimeout(() => {
            this.onTimeout.emit(+new Date());
        }, 3000);
    }

}
