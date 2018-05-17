import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  modal: any;


  constructor(private modalService: NgbModal, private authService: AuthService) {
  }

  ngOnInit() {
  }

  openWindow(content) {
    this.modal = this.modalService.open(content);
  }

  signup(e) {
    e.preventDefault();
    if (this.emailSignup === this.emailSignup2 && this.pwdSignup === this.pwdSignup2) {
      this.authService.siteSignup(this.userSignup, this.emailSignup, this.nameSignup, this.pwdSignup).then(res => {
        res ? this.modal.close() : alert('error');
      });
    }
  }

  login(e) {
    e.preventDefault();
    this.authService.siteLogin(this.userLogin, this.pwdLogin).then(res => {
      res ? this.modal.close() : alert('Incorrect username or password');
    });
  }

}
