import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBars, faBurger, faClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [
    RouterOutlet,
    FaIconComponent
  ],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent {

  toggleSidebar = () => {
    const sidebar = document.querySelector('nav');
    sidebar && sidebar.classList.toggle('active');
  }
  protected readonly faClose = faClose;
  protected readonly faBurger = faBurger;
  protected readonly faBars = faBars;
}
