import {Component, EventEmitter, OnInit} from '@angular/core';



@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  inputs: ['video'],
  outputs : ['updateVideoEvent', 'deleteVideoEvent' ]
})
export class VideoDetailComponent implements OnInit {
private editTitle: boolean = false;
private video: any;
private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onTitleClick() {
    this.editTitle = true;
}
updateVideo() {
    this.updateVideoEvent.emit(this.video);
}
deleteVideo() {
  this.deleteVideoEvent.emit(this.video);
}

}
