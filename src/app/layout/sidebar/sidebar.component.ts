import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faGithub, faGitlab, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
import { DividerComponent } from "../../components/divider/divider.component";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ProfilePictureComponent } from "../../components/profile-picture/profile-picture.component";
import { SidebarService } from "../../services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    FaIconComponent,
    DividerComponent,
    ProfilePictureComponent,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faXing = faXing;
  protected readonly faGitlab = faGitlab;
  protected readonly faLocationDot = faLocationDot;

  protected isOpen: boolean = false;

  constructor(private readonly sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.sidebarService.isOpen.subscribe(isOpen => this.isOpen = isOpen);
  }

  toggleSidebar = (): void => this.sidebarService.toggle();

}
