import {Component, Input, OnInit, SimpleChange, OnChanges} from '@angular/core';
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit, OnChanges {


  private moviesPopular: any;
  private moviesTop: any;
  private moviesSearch: any;
  private moviesFavorite: any;

  @Input() query;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies('popular').then(data => {
      this.moviesPopular = data;
    });
    this.movieService.getMovies('top').then(data => {
      this.moviesTop = data;
    });
    this.movieService.getFavorites().then(data => {
      this.moviesFavorite = data;
    });
  }

  loadFavorites() {
    this.movieService.getFavorites().then(data => {
      this.moviesFavorite = data;
    });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.query !== '' && this.query) {
      this.movieService.searchMovie(this.query).then(data => {
        data.length === 0 ? alert('No movies where found') : this.moviesSearch = data;
      });
    }
  }
}
