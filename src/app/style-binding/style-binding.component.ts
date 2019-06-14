import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-style-binding',
    templateUrl: './style-binding.component.html',
    styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
    isValid: boolean = false;
    validColor: string = 'lime';
    invalidColor: string = 'salmon';

    toggleValid() {
        this.isValid = !this.isValid;
    }

    constructor() { }

    ngOnInit() {
    }

}
