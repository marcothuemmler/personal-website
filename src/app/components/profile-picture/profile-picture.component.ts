import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent {
  @Input({required: true}) profilePicture: string = "";
  @Input({transform: numberAttribute}) size = 220;
}
