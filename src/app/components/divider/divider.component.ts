import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {
  @Input() margin: string = '32px 8px';
  @Input({transform: numberAttribute}) marginTop: number = 32;
  @Input({transform: numberAttribute}) marginRight: number = 8;
  @Input({transform: numberAttribute}) marginBottom: number = 32;
  @Input({transform: numberAttribute}) marginLeft: number = 8;
}
