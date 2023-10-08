import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudyPortal';

  constructor(private router: Router) { }

  redirectToNewPage() {
    this.router.navigate(['/BIT']); // Navigate to the 'new-page' route
    const link=document.querySelector('.link') as HTMLElement;
    link.style.display="none";
  }
}
