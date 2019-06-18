import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLogInFailed = false;
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    // this.roles = this.tokenStorageService.getAuthor();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const {value} = this.loginForm;
      // @ts-ignore
      this.authService.attempAuth(value).subscribe(next => {
        this.tokenStorageService.saveToken(next.accessToken);
        this.tokenStorageService.saveEmail(next.email);
        // @ts-ignore
        this.tokenStorageService.saveAuthor(next.authorities);

        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getAuthor();
        console.log(this.roles);
      }, error => {
        this.isLogInFailed = true;
      });
    }
  }
}
