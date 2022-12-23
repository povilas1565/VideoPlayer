import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import {AppComponent} from './AppComponent';
import {AppCommonModule} from './common/AppCommonModule';
import {ErrorPageComponent} from './pages/error-page/ErrorPageComponent';
import {VideoStatisticsPageComponent} from './pages/video-statistics-page/VideoStatisticsPageComponent';
import { VideoPlayerPageComponent } from './pages/video-player-page/VideoPlayerPage';

const routes: Route[] = [
    { path: '', redirectTo: 'video-player', pathMatch: 'full' },
    { path: 'video-player', component: VideoPlayerPageComponent },
    { path: 'video-statistics', component: VideoStatisticsPageComponent },
    { path: '**', component: ErrorPageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        VideoStatisticsPageComponent,
        VideoPlayerPageComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        AppCommonModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
