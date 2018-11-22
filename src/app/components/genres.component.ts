import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-genres',
    template: `
        <span *ngFor="let genre of genres"><mark>{{genre}}</mark> </span>
    `,
    styles: [`span {margin-right: 10px;}`]
})
export class GengresComponent {
    @Input() public genres: string[];
}
