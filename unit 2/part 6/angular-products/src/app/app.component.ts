import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'ap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('routeAnimation', [
            transition('productList => productDetail', [
                query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, width: '100%' })),
                query(':enter', style({ transform: 'translateX(100%)' })),
                group([
                    query(':leave', [
                        animate('0.5s', style({ transform: 'translateX(-100%)' })),
                    ]),
                    query(':enter', [
                        animate('0.5s', style({ transform: 'none' })),
                    ]),
                ])
            ]),
            transition('productDetail => productList', [
                query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, width: '100%' })),
                query(':enter', style({ transform: 'translateX(-100%)' })),
                group([
                    query(':leave', [
                        animate('0.5s', style({ transform: 'translateX(100%)' })),
                    ]),
                    query(':enter', [
                        animate('0.5s', style({ transform: 'none' })),
                    ]),
                ])
            ])
        ])
    ]
})
export class AppComponent {
    getState(outlet: RouterOutlet) {
        // Returns the page animation name (or 'None' of it has no animation)
        return outlet.activatedRouteData.animation || 'None';
    }
}
