import {Component, OnInit} from '@angular/core';
import {SSLoopType, SSPlayerConfig, SSVideoSource} from '../../common/components/ss-video-player/SSVideoPlayerComponent';

@Component({
    templateUrl: 'VideoPlayerPage.html'
})
export class VideoPlayerPageComponent implements OnInit {
    playerConfig: SSPlayerConfig = {
        loop: SSLoopType.All,
        autoplay: false,
        trackUser: true
    };
    videoSources: SSVideoSource[] = [];

    ngOnInit(): void {
        this.videoSources = [
            {
            title: 'Nimble Live_Kotel2',
            poster: 'https://thumbpic.cast-tv.biz/ThumbPic/23595/2013_10/170237_Kotel.jpg",',
            source: 'https://cdn1.cast-tv.com/23595/Live_Kotel_image/playlist.m3u8'
        }
        ];
    }
}
