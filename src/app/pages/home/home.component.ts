import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DividerComponent } from "../../components/divider/divider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    DividerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
