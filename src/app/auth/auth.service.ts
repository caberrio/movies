import { Injectable } from '@angular/core';
import {SbxCoreService} from 'sbxangular';

@Injectable()
export class AuthService {

  constructor(private sbxCoreService: SbxCoreService) { }

  siteLogin(username, password) {
    this.sbxCoreService.login(username, password, 222).then(data => {
      console.log(data);
    });
  }

  siteSignup(username, email, name, password) {
    this.sbxCoreService.signUp(username, email, name, password).then(data => {
      console.log(data);
    });
  }
}
