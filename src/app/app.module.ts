import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChoosecourseComponent } from './choosecourse/choosecourse.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ChoosecourseComponent,
    LoginComponent,
    StudyMaterialComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
