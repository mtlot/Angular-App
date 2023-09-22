import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {ExamsApiService} from './exams/exams-api.service';
import {ExamFormComponent} from './exams/exam-form.component';
import {AppComponent} from './app.component';
import {ExamsComponent} from './exams/exams.component';

import * as Auth0 from 'auth0-web';
import {CallbackComponent} from './callback.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';

const appRoutes: Routes = [
  {path: 'new-exam', component: ExamFormComponent},
  {path: '', component: ExamsComponent},
  {path: 'callback', component: CallbackComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    ExamsComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'dev-ec1o2bir1iwrhthn.us.auth0.com',
      audience: 'https://online-exam.digituz.com.br',
      clientID: 'TF28z3XF6ktTJsU3s8HDXxkVb05BEZ6K',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile manage:exams'
    });
  }
}
