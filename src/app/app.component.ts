import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ReviewsComponent} from "./reviews/reviews.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GalleryComponent, ReviewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Allstar Roofing & Fencing';
}
