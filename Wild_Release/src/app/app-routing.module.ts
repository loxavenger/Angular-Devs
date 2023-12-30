import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';
import { PageNotFoundComponent } from './HomePage/page-not-found/page-not-found.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ProjectComponent } from './Pages/project/project.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Project',component:ProjectComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
