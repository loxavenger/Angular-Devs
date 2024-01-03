import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './HomePage/home/home.component';
import { HeaderComponent } from './HomePage/header/header.component';
import { FooterComponent } from './HomePage/footer/footer.component';
import { PageNotFoundComponent } from './HomePage/page-not-found/page-not-found.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ProjectComponent } from './Pages/project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
