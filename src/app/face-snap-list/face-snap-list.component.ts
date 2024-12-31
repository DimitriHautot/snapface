import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {FaceSnapComponent} from "../face-snap/face-snap.component";
import {FaceSnapsService} from "../services/face-snaps.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }

  routeToLandingPage() {
    this.router.navigateByUrl('');
  }
}
