import {Component, Input, OnInit, SimpleChange, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit, OnChanges {

  APIKEY = '5198931fa9657e14d0fd0261c276ca40';
  private moviesPopular: any;
  private moviesTop: any;
  private moviesSearch: any;
  private moviesFavorite: any;

  @Input() query;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.APIKEY).toPromise()
      .then(result => result)
      .then((data: any) => {
        this.moviesPopular = data.results;
      });
    this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.APIKEY).toPromise()
      .then(result => result)
      .then((data: any) => {
        this.moviesTop = data.results;
      });
    this.loadFavorites();

  }

  loadFavorites() {
    this.moviesFavorite = JSON.parse(localStorage.getItem('favorites'));
    console.log(this.moviesFavorite);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.searchMovie();
  }

  searchMovie() {
    if (this.query !== '') {
      this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.APIKEY + '&query=' + this.query).toPromise()
        .then(result => result)
        .then((data: any) => {
          this.moviesSearch = data.results;
          console.log(this.moviesSearch);
        });
    }
  }

}
