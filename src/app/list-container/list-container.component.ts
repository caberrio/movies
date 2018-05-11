import {Component, Input, OnInit, SimpleChange, OnChanges} from '@angular/core';
import {GetListService} from '../get-list.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
  providers: [GetListService]
})
export class ListContainerComponent implements OnInit, OnChanges {


  private moviesPopular: any;
  private moviesTop: any;
  private moviesSearch: any;
  private moviesFavorite: any;

  @Input() query;

  constructor(private getListService: GetListService) {
  }

  ngOnInit() {
    this.moviesPopular = this.getListService.getList('popular');
    this.moviesTop = this.getListService.getList('top_rated');
    this.loadFavorites();

  }

  loadFavorites() {
    this.moviesFavorite = JSON.parse(localStorage.getItem('favorites'));
    console.log('loading favs');
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.moviesSearch = this.getListService.searchMovie(this.query);
  }

  /*searchMovie() {
    if (this.query !== '') {
      this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.APIKEY + '&query=' + this.query).toPromise()
        .then(result => result)
        .then((data: any) => {
          this.moviesSearch = data.results;
          console.log(this.moviesSearch);
        });
    }
  }*/

}
