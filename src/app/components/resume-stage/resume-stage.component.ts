import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-resume-stage',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './resume-stage.component.html',
  styleUrl: './resume-stage.component.css'
})
export class ResumeStageComponent {
  @Input({required: true}) title?: string;
  @Input() position?: string;
  @Input({required: true}) timeframe?: string;
  @Input({required: true}) description?: string[];
}
