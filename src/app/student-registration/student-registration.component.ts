import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent implements OnInit{

  form: any;

  ngOnInit(): void {

    this.initForm();
  }

  get formControls() {
    return this.form.controls;
  }


  onSubmit(value:any, valid:boolean) {
    console.log(value);
  }



  initForm(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }
}
