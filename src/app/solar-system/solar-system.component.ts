import { Component } from '@angular/core';

@Component({
  selector: 'app-solar-system',
  imports: [],
  templateUrl: './solar-system.component.html',
  styleUrl: './solar-system.component.css'
})
export class SolarSystemComponent {

  scale = 1

  onZoom(event: WheelEvent) {
    event.preventDefault();
    const zoomFactor = 0.1;
    if (event.deltaY < 0) {
      this.scale += zoomFactor;
    } else {
      this.scale -= zoomFactor;
    }
    this.scale = Math.max(0.1, Math.min(this.scale, 20)); // Limit the zoom scale
    const zoomContent = document.querySelector('.zoom-content') as HTMLElement;
    zoomContent.style.transform = `scale(${this.scale})`;
  }
}
