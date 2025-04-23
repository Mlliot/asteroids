import { Component, ElementRef, inject, OnInit, output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutDirective } from '../about.directive';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  service = inject(ApiService);

  ngOnInit(): void {
    // this.service.getToday().subscribe((data) => {
    //   console.log(data)
    // })
  }

}
