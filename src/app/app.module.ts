import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EchoInputComponent } from './echo-input/echo-input.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventReceiverComponent } from './event-receiver/event-receiver.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';

@NgModule({
    declarations: [
        AppComponent,
        EchoInputComponent,
        ClassBindingComponent,
        StyleBindingComponent,
        NgClassExampleComponent,
        EventBindingComponent,
        EventReceiverComponent,
        EventEmitterComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
