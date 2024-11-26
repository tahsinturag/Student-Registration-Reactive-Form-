import { Component } from '@angular/core';
import {StudentRegistrationComponent} from '../student-registration/student-registration.component';

@Component({
  selector: 'app-student-registration-container',
  standalone: true,
  imports: [
    StudentRegistrationComponent
  ],
  templateUrl: './student-registration-container.component.html',
  styleUrl: './student-registration-container.component.css'
})
export class StudentRegistrationContainerComponent {

}
