import { Component } from '@angular/core';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import {
  StudentRegistrationContainerComponent
} from './student-registration-container/student-registration-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentRegistrationComponent, StudentRegistrationContainerComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {

}


