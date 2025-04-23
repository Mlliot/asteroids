import { Component, ElementRef, inject, OnInit, output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutDirective } from '../about.directive';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  service = inject(ApiService);
  isActive = false
  links = [
    { text: 'About IFG', url: '/about' },
    { text: 'Claims', url: '/claims' },
    { text: 'Joining IFG', url: '/home' },
    { text: 'For Liability', url: '/liability' },
    { text: 'For Property', url: '/property' },
    { text: 'For Business', url: '/business' },
    { text: 'Contact Us', url: '/contact' },
    { text: 'Login in', url: '/login' },
    { text: 'Profile', url: '/profile' }
  ];

  ngOnInit(): void {
    // this.service.getToday().subscribe((data) => {
    //   console.log(data)
    // })
  }

  navigatePage() {
      this.isActive = !this.isActive
  }

}
