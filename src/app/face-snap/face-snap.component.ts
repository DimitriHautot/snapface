import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgStyle,
  PercentPipe,
  UpperCasePipe
} from "@angular/common";
import {FaceSnapsService} from "../services/face-snaps.services";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {
  }
  ngOnInit(): void {
    this.userHasSnapped = false;
    this.snapButtonText = "Oh Snap!";
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
}
