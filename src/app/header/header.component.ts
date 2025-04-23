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

  picDesc = '';
  about = false;
  service = inject(ApiService);

  ngOnInit(): void {
    // this.service.getToday().subscribe((data) => {
    //   console.log(data)
    // })
  }

  onClick(){
    if(this.about){
      this.about = false;
    } else {
      this.about = true;
    }
    console.log("Header clock, + " + this.about);
  }
}
