import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-genres',
    template: `
        <span *ngFor="let genre of genres"><mark>#{{genre}}</mark></span>
    `,
    styles: [`mark, .mark {
        color: #fff;
        background-color: #a1a2a2;
        border-radius: 3px;
        margin-right: 10px;
    }`]
})
export class GengresComponent {
    @Input() public genres: string[];
}
