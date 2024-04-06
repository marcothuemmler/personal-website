import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactComponent } from "./contact/contact.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "resume", component: ResumeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
];
