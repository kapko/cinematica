import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from '../models/movie';
import { movies } from '../content/movie.mock-data';

@Injectable()
export class MovieService {

    public getMovieList(): Observable<IMovie[]> {
        return of(movies);
    }

}
