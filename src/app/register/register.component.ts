import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../common/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  isSignedUp = false;
  isSignedUpFailed = false;
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      birthday: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      // @ts-ignore
      const role = {role: ['user']};
      // @ts-ignore
      const signUpValue = {
        ...value,
        ...role
      };
      this.authService.signUp(signUpValue).subscribe(next => {
        this.isSignedUp = true;
        this.isSignedUpFailed = false;
      }, e => {
        this.isSignedUpFailed = true;
        this.errorMessage = e.messgae;
        console.log(e);
        console.log(signUpValue);
      });
    }
  }
}
