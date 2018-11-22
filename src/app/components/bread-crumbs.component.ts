import { Component, Input } from '@angular/core';
import { IMovie } from '../models/movie';

@Component({
    selector: 'app-bread-crumbs',
    template: `
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a [routerLink]="['movies']" fragment="{{movie.key}}">Movies</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{movie.name}}</li>
            </ol>
        </nav>
`,
})

export class BreadCrumbsComponent {
    @Input() public movie: IMovie;
}
