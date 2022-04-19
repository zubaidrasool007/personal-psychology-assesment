import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartTestComponent } from './start-test/start-test.component';
import { PersonalityTestQustionComponent } from './personality-test-qustion/personality-test-qustion.component';
import { TestResultComponent } from './test-result/test-result.component';

const routes: Routes = [
  {
    path: "",
    component: StartTestComponent,

  },
  {
    path: "qustion",
    component: PersonalityTestQustionComponent,
  },
  {
    path: "result",
    component: TestResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
