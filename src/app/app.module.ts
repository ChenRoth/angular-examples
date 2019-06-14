import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EchoInputComponent } from './echo-input/echo-input.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

@NgModule({
    declarations: [
        AppComponent,
        EchoInputComponent,
        ClassBindingComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
