import {Component} from '@angular/core';
@Component({
    selector: 'ss-root',
    templateUrl: './AppComponent.html',
    styleUrls: ['./AppComponent.scss']
})
export class AppComponent {
    title = 'Video Player';
    isMenuCollapsed = true;

    toggleMenu(): void {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    }
}
