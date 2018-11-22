import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../models/movie';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    private searchValue: string;

    transform(data: IMovie[], value: string, genreTag: string): IMovie[] {
        this.searchValue = value;

        return data.filter(movie => {
            if (
                this.isOnValue(movie, 'name') ||
                this.isOnValue(movie, 'id') ||
                this.isOnValue(movie, 'description')
            ) {
                // filter by genres
                if (genreTag && genreTag !== 'all') {
                    return movie.genres.includes(genreTag);
                }
                return true;
            }
        });
    }

    private textToLowerCase(text: string): string {
        return `${text}`.toLocaleLowerCase();
    }

    private isOnValue(movie: IMovie, field: string): boolean {
        if (this.searchValue && this.searchValue.length) {
            return this.textToLowerCase(movie[field]).indexOf(this.searchValue) > -1;
        }

        return true;
    }

}
