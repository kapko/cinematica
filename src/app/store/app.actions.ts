import { Action } from '@ngrx/store';
import { IMovie } from '../models/movie';

export const LOAD_MOVIE = '[Movie] Load';

export class LoadMovie implements Action {
    readonly type = LOAD_MOVIE;

    constructor(public payload: IMovie[]) {}
}

export type Types = LoadMovie;
