import { Component, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-eng',
  templateUrl: './comp-eng.component.html',
  styleUrls: ['./comp-eng.component.css']
})
export class CompEngComponent {
  private trailer: HTMLElement | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.trailer = this.el.nativeElement.querySelector('#trailer');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const num = document.querySelector(".page-nav") as HTMLElement;
    const num1 = document.querySelector("header") as HTMLElement;
    if (this.trailer) {
      const x = event.clientX - this.trailer.offsetWidth / 2;
      const y = event.clientY - this.trailer.offsetHeight / 2 - num.offsetHeight - num1.offsetHeight;

      // Use the animate function to transition the position smoothly
      this.trailer.animate(
        [
          { transform: `translate(${this.trailer.style.transform})` },
          { transform: `translate(${x}px, ${y}px)` }
        ],
        {
          duration: 300, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function (e.g., ease-in-out)
          fill: 'forwards'
        }
      );
    }
  }
}
