import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isNavVisible: boolean = true;
  toggleNavVisibility() {
    this.isNavVisible = !this.isNavVisible;
  }
}
