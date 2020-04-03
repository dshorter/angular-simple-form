import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppleFormComponent } from './apple-form/apple-form.component';
import { DqPhoneNanpDirective } from './validators/dq-phone-nanp.directive';    


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AppleFormComponent, DqPhoneNanpDirective ],
  bootstrap:    [ AppleFormComponent ]
})
export class AppModule { }
