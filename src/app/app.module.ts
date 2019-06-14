import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EchoInputComponent } from './echo-input/echo-input.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';

@NgModule({
    declarations: [
        AppComponent,
        EchoInputComponent,
        ClassBindingComponent,
        StyleBindingComponent,
        NgClassExampleComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
