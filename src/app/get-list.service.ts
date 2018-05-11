import {HttpClient} from '@angular/common/http';

export class GetListService {

  APIKEY = '5198931fa9657e14d0fd0261c276ca40';
  constructor(private http: HttpClient) { }

  getList(name: string) {
    this.http.get('https://api.themoviedb.org/3/movie/' + name + '?api_key=' + this.APIKEY).toPromise()
      .then(result => result)
      .then((data: any) => {
        return data.results;
      });
  }

  searchMovie(query: string) {
    if (query !== '') {
      this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.APIKEY + '&query=' + query).toPromise()
        .then(result => result)
        .then((data: any) => {
          return data.results;
        });
    }
  }
}
