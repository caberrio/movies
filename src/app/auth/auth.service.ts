import { Injectable } from '@angular/core';
import {SbxCoreService, SbxSessionService} from 'sbxangular';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  constructor(private sbxCoreService: SbxCoreService, private sbx: SbxSessionService, private cookie: CookieService) { }

  siteLogin(username, password) {
    this.sbx.login(username, password, 222).then(data => {
      this.sbx.updateCookieToken(data.token);
      console.log(data);
      this.cookie.set('user_id', data.user.id);
    });
  }

  siteSignup(username, email, name, password) {
    this.sbxCoreService.signUp(username, email, name, password).then(data => {
      console.log(data);
    });
  }

  getModel(name: string) {
    this.sbxCoreService.find(name).toPromise().then(data => {
      console.log(data);
    });
  }
}
