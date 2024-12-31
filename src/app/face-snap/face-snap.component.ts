import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {NgClass, UpperCasePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgClass, UpperCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean
  snapButtonText!: string;

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.userHasSnapped = false;
    this.snapButtonText = "Oh Snap!";
  }

  routeToSingleFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
