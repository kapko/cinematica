import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-rate',
    template: `
        <div class="progress">
            <div class="progress-bar bg-danger"
                role="progressbar"
                [ngStyle]="{'width': percent}"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100">
            </div>
        </div>
        <i>Rate: {{rate}}</i>
    `,
    styles: [`.progress {margin-top: 20px; width: 300px; height: 5px}`]
})
export class RateComponent implements OnChanges {
    @Input() public rate: string;

    public percent: string;

    ngOnChanges() {
        if (this.rate) {
            this.percent = `${+this.rate * 10}%`;
        }
    }
}
