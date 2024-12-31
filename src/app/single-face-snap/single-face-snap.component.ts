import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from "@angular/common";
import {FaceSnapsService} from "../services/face-snaps.services";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  onSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.userHasSnapped = true;
    this.snapButtonText = "Oops, unSnap!";
  }

  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.userHasSnapped = false;
    this.snapButtonText = "Oh Snap!";
  }

  private prepareInterface(): void {
    this.userHasSnapped = false;
    this.snapButtonText = "Oh Snap!";
  }

  private getFaceSnap(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getSnapFaceById(faceSnapId);
  }
}
