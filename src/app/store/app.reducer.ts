import { IMovie } from '../models/movie';
import * as MovieAction from './app.actions';

export interface MovieState {
    items: IMovie[];
}

export const initialState: MovieState = {
    items: []
};

export function movieReducer(state = initialState, action: MovieAction.Types): IMovie[] {

    switch (action.type) {
        case MovieAction.LOAD_MOVIE:
            return action.payload;
    }

}
