import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
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

  @Output() newLogin = new EventEmitter();

  constructor(private modalService: NgbModal, private authService: AuthService) {
  }

  ngOnInit() {
  }

  openWindow(content) {
    this.modal = this.modalService.open(content);
  }

  clean() {
    this.userLogin = '';
    this.pwdLogin = '';

    this.userSignup = '';
    this.emailSignup = '';
    this.emailSignup2 = '';
    this.nameSignup = '';
    this.pwdSignup = '';
    this.pwdSignup2 = '';
  }

  signup(e) {
    e.preventDefault();
    if (this.emailSignup === this.emailSignup2 && this.pwdSignup === this.pwdSignup2) {
      this.authService.siteSignup(this.userSignup, this.emailSignup, this.nameSignup, this.pwdSignup).then(res => {
        if (res) {
          this.modal.close();
          this.clean();
        } else {
          alert('error: ' + res);
        }
      });
    }
  }

  login(e) {
    e.preventDefault();
    this.authService.siteLoginRx(this.userLogin, this.pwdLogin);
    /*if (this.userLogin && this.pwdLogin) {
      this.authService.siteLogin(this.userLogin, this.pwdLogin).then(res => {
        if (res) {
          this.newLogin.emit();
          this.clean();
          this.modal.close();
        } else {
          alert('Login failed');
        }
      });
    }*/
  }

  userLogout() {
   if (this.authService.isLogged()) {
     this.authService.siteLogout();
   }
  }
}
