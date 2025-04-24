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
    { text: 'Solar System', url: '/solar' },
    { text: 'Earth', url: '/earth' },
    { text: 'Info', url: '/info' },
    { text: 'Space', url: '/space' },
    { text: 'Settings', url: '/settings' },
    { text: 'Mars Rover', url: '/mars-rover' },
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
