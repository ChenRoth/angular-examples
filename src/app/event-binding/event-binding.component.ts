import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

    printSomethingHardCoded() {
        console.log('something hard coded!');
    }

    printClickTarget(event: MouseEvent) {
        console.log(`button '#${(event.target as HTMLButtonElement).id}' was clicked`);
    }

    printMouseOverTarget(event) {
        alert(`one mouse flew over the #${event.target.id} element`);
    }

    constructor() { }

    ngOnInit() {
    }

}
