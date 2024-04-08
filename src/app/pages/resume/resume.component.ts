import { Component, ViewEncapsulation } from '@angular/core';
import { DividerComponent } from "../../components/divider/divider.component";
import { ResumeStageComponent } from "../../components/resume-stage/resume-stage.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBookOpenReader, faGraduationCap, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    DividerComponent,
    ResumeStageComponent,
    FaIconComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent {

  protected readonly faBookOpenReader = faBookOpenReader;
  protected readonly faScrewdriverWrench = faScrewdriverWrench;
  protected readonly faGraduationCap = faGraduationCap;
}
