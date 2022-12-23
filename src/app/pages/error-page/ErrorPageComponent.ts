import {Component} from '@angular/core';

@Component({
    templateUrl: 'ErrorPage.html',
    styleUrls: ['ErrorPage.scss']
})
export class ErrorPageComponent {
    errorCode = 404;
    errorMessage = 'Not Found';
}
