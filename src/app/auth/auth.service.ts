import {Injectable} from '@angular/core';
import {SbxCoreService, SbxSessionService} from 'sbxangular';

import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  log: boolean;

  constructor(private sbxCoreService: SbxCoreService, private sbx: SbxSessionService, private cookie: CookieService) {
  }

  isLogged() {
    return this.log || false;
  }

  siteLogin(username, password) {
    return this.sbx.login(username, password, 222).then(data => {
      if (this.log) {
        return false;
      }
      if (data.success) {
        this.sbx.updateCookieToken(data.token);
        this.cookie.set('user_id', data.user.id);
        this.log = true;
      }
      return data.success;
    }).catch(err => {
      return false;
    });
  }

  siteLoginRx(username, password) {
    return this.sbxCoreService.loginRx(username, password, 222).subscribe(res => {
      if (this.log) {
        return false;
      }
      if (res.success) {
        this.sbx.updateCookieToken(res.token);
        this.cookie.set('user_id', res.user.id);
        this.log = true;
      }
      console.log(res);
    });
  }

  siteLogout() {
    this.cookie.delete('token');
    this.cookie.delete('user_id');
    location.reload();
  }

  siteSignup(username, email, name, password) {
    return this.sbxCoreService.signUp(username, email, name, password).then(data => {
      if (data.success) {
        this.sbxCoreService.insert('user', {user_id: data.user.id}).then(res => {
          alert('User ' + username + ' successfully created, you can now log into the app!');
        });
      }
      return data.success;
    }).catch(err => {
      console.log(err);
      return false;
    });
  }

  siteSignupRx(username, email, name, password) {
    this.sbxCoreService.signUpRx(username, email, name, password).subscribe(res => {
      if (res.success) {
        console.log('ok');
      }
    }, (err => {
      console.log('error');
    }));
  }
}
