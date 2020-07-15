import { Component, VERSION } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls:['./welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public angularVersion: string;
    constructor() {
      this.angularVersion = VERSION.full;
    }
}
