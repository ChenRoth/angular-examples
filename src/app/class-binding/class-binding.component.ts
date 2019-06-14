import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-class-binding',
    templateUrl: './class-binding.component.html',
    styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
    isPink: boolean = false;

    togglePink() {
        this.isPink = !this.isPink;
    }

    constructor() { }

    ngOnInit() {
    }

}
