import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { AlertComponent } from './_components';
import { fakeBackendProvider } from './_helpers';
import { HttpReqInterceptor } from './interceptors/httpReqInterceptor';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UpdateUserComponent } from './update-user/update-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    NavigationComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }