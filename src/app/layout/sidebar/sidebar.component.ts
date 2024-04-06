import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faGithub, faGitlab, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
import { DividerComponent } from "../divider/divider.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    FaIconComponent,
    DividerComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faXing = faXing;
  protected readonly faGitlab = faGitlab;
}
