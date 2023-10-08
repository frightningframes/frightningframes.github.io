import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slideIndex = 0;

  ngOnInit() {
    this.showSlides();
  }

  showSlides() {
    const slides = document.querySelectorAll(".mySlides") as NodeListOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    slides[this.slideIndex - 1].style.display = "block";
    setTimeout(() => this.showSlides(), 3000); // Change slide every 3 seconds (adjust as needed)
  }
}
