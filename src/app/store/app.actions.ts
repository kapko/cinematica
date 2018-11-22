import { Action } from '@ngrx/store';
import { IMovie } from '../models/movie';

export const LOAD_MOVIE = '[Movie] Load';
export const SEARCH_MOVIE = '[Movie] Search';

export class LoadMovie implements Action {
    readonly type = LOAD_MOVIE;
    constructor(public payload: IMovie[]) {}
}

export class SearchMovie implements Action {
    readonly type = SEARCH_MOVIE;
    constructor(public payload: string) {}
}

export type Types = LoadMovie | SearchMovie;
