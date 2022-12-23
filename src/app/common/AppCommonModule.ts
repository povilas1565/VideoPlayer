import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SSVideoPlayerComponent} from './components/ss-video-player/SSVideoPlayerComponent';
import {SSDataChartComponent} from './components/ss-data-chart/SSDataChartComponent';
import {SecsToMinsPipe} from './pipes/SecsToMinsPipe';
import {StorageService} from './services/StorageService';
import {SessionService} from './services/SessionService';

@NgModule({
    declarations: [
        SSVideoPlayerComponent,
        SSDataChartComponent,
        SecsToMinsPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        SSVideoPlayerComponent,
        SSDataChartComponent,
        FormsModule
    ],
    providers: [
        SessionService,
        StorageService
    ]
})
export class AppCommonModule { }
