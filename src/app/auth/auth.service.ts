import {Injectable} from '@angular/core';
import {SbxCoreService, SbxSessionService} from 'sbxangular';

import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  constructor(private sbxCoreService: SbxCoreService, private sbx: SbxSessionService, private cookie: CookieService) {
  }

  siteLogin(username, password) {
    return this.sbx.login(username, password, 222).then(data => {
      if (data.success) {
        this.sbx.updateCookieToken(data.token);
        this.cookie.set('user_id', data.user.id);
      }
      return data.success;
    }).catch(err => {
      return false;
    });
  }

  siteSignup(username, email, name, password) {
    return this.sbxCoreService.signUp(username, email, name, password).then(data => {
      if (data.success) {
        this.siteLogin(username, password);
        alert('User ' + username + ' successfully created, you can now log into the app!');
        // this.sbxCoreService.insert('user') TODO: Insert user id into user model.
      }
      return data.success;
    }).catch(err => {
      return false;
    });
  }
}
