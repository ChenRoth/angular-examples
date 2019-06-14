import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-class-example',
    templateUrl: './ng-class-example.component.html',
    styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {
    randomFactor = Math.random();

    classes = {
        pink: this.randomFactor > 0.5,
        bold: this.randomFactor > 0.2,
        underlined: this.randomFactor > 0.9,
    };

    constructor() { }

    ngOnInit() {
    }

}
