import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { StartTestComponent } from './start-test/start-test.component';
import { PersonalityTestQustionComponent } from './personality-test-qustion/personality-test-qustion.component';
import { TestResultComponent } from './test-result/test-result.component';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    AppComponent,
    StartTestComponent,
    PersonalityTestQustionComponent,
    TestResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RadioButtonModule, FormsModule, StepsModule, ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
