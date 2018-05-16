import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { SbxCoreModule, SbxSessionModule, SbxSessionService } from 'sbxangular';


import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {MovieComponent} from './movie/movie.component';
import {ListContainerComponent} from './list-container/list-container.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import {MovieService} from './movie.service';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieComponent,
    ListContainerComponent,
    HeaderComponent,
    ModalComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    SbxCoreModule,
    SbxSessionModule
  ],
  providers: [MovieService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})

export class AppModule {
  constructor(private session: SbxSessionService) {
    this.session.initialize(222, '0b307a51-c8de-4613-998e-ddd3ecb7c823');
  }
}
