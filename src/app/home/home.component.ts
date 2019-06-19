import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../common/token/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.info = {
      token: this.tokenStorageService.getToken(),
      email: this.tokenStorageService.getEmail(),
      author: this.tokenStorageService.getAuthor()
    };
  }


  logout() {
    this.tokenStorageService.logOut();
    window.location.reload();
  }
}
