import { Component, OnInit } from '@angular/core';
import {Video} from '../video';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {
  videos: Array<Video>;
  selectedVideo: Video;
  private hiddennewVideo: boolean = true

  constructor(private _videoService: VideoService) {
  }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hiddennewVideo = true;
    console.log(this.selectedVideo);
  }

  onsubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.selectedVideo = resNewVideo;
      });
  }

  newVideo() {
    this.hiddennewVideo = false;
  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideo(video)
      .subscribe(resupdateVideo => video = resupdateVideo);
        this.selectedVideo = null;

      }
  onDeleteVideoEvent(video: any ) {
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => {
         for ( let i = 0; i < videoArray.length; i++) {
           if ( videoArray[i]._id ===  video._id ) {
           videoArray.splice(i, 1);
           }
         }
      });
  this.selectedVideo = null;
  }
}
