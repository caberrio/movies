import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {

  APIKEY = '5198931fa9657e14d0fd0261c276ca40';
  constructor(private http: HttpClient) { }

  getList(name: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + name + '?api_key=' + this.APIKEY).toPromise().then((data: any) => {
      return data.results;
    });
  }

  searchMovie(query: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.APIKEY + '&query=' + query).toPromise()
      .then((data: any) => {
        return data.results;
      });
  }
}
