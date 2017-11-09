import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit() {
        this.titleService.setTitle('Welcome | Angular products');
    }
}
