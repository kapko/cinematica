import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-genres',
    template: `
        <span *ngFor="let genre of genres"><mark>#{{genre}}</mark></span>
    `,
    styles: [`
        span {
            display: inline-block;
            cursor: pointer;
            margin: 3px;
        }
        mark, .mark {
            color: #fff;
            background-color: #a1a2a2;
            border-radius: 3px;
        }
        .active {
            background-color: #333!important;
        }`]
})
export class GengresComponent {
    @Input() public genres: string[];
}
