import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IMovie } from './movie'
import { MovieService } from './movie.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  _searchQuery = '';
  get searchQuery(): string {
    return this._searchQuery;
  }
  set searchQuery(value: string) {
    this._searchQuery = value;
  }

  movies: IMovie[] = [];

  sendRequest(): void {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4b49844f7ec4ed152648bc08d9545d58&query=${this.searchQuery}`).then(
      r => r.json()
    ).then(
      data => this.movies = data.results
    )
  }
  
  ngOnInit(): void {
  }
}
