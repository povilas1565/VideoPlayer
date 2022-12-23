import {Component} from '@angular/core';

@Component({
    templateUrl: 'ErrorPage.html',
    styleUrls: ['error-page.scss']
})
export class ErrorPageComponent {
    errorCode = 404;
    errorMessage = 'Not Found';
}
