import { Component } from '@angular/core';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentRegistrationComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {

}


