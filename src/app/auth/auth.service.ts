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
      }
      return data.success;
    }).catch(err => {
      return false;
    });
  }

  getModel(name: string) {
    this.sbxCoreService.find(name).toPromise().then(data => {
    });
  }
}
