import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMovie } from './movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=4b49844f7ec4ed152648bc08d9545d58&query=fight club";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieUrl)
  } 
}
