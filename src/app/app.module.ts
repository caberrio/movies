import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {MovieComponent} from './movie/movie.component';
import {ListContainerComponent} from './list-container/list-container.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import {MovieService} from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieComponent,
    ListContainerComponent,
    HeaderComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})

export class AppModule {
}
