import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  userLogin: string;
  pwdLogin: string;
  userSignup: string;
  emailSignup: string;
  emailSignup2: string;
  nameSignup: string;
  pwdSignup: string;
  pwdSignup2: string;

  constructor(private modalService: NgbModal, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getModel('movie');
  }

  openWindow(content) {
    this.modalService.open(content);
  }

  signup() {
    this.authService.siteSignup(this.userSignup, this.emailSignup, this.nameSignup, this.pwdSignup );
  }

  login() {
    this.authService.siteLogin(this.userLogin, this.pwdLogin);
  }

}
