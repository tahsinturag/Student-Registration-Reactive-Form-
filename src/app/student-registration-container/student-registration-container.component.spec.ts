import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationContainerComponent } from './student-registration-container.component';

describe('StudentRegistrationContainerComponent', () => {
  let component: StudentRegistrationContainerComponent;
  let fixture: ComponentFixture<StudentRegistrationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRegistrationContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegistrationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
