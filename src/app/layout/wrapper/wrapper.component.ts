import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { SidebarService } from "../../services/sidebar.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [
    RouterOutlet,
    FaIconComponent,
    NgIf
  ],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent implements OnInit {
  protected readonly faBars = faBars;
  isOpen: boolean = false;

  constructor(private readonly sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.sidebarService.isOpen.subscribe(isOpen => this.isOpen = isOpen);
  }

  toggleSidebar = () => this.sidebarService.toggle();

  protected readonly faClose = faClose;
  protected readonly window = window;
}
