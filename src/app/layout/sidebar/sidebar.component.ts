import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faGithub, faGitlab, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
import { DividerComponent } from "../../components/divider/divider.component";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ProfilePictureComponent } from "../../components/profile-picture/profile-picture.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    FaIconComponent,
    DividerComponent,
    ProfilePictureComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faXing = faXing;
  protected readonly faGitlab = faGitlab;
  protected readonly faLocationDot = faLocationDot;
}
