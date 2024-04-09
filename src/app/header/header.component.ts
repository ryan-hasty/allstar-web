import {Component, HostListener} from '@angular/core';
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

  isNavMenuOn: boolean = true;

  toggleNavVisibility(): void {
    this.isNavMenuOn = !this.isNavMenuOn;
  }
}
