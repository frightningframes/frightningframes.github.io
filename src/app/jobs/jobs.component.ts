import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  
  constructor(private location: Location, private router: Router) {}

 
    goBack(): void {
      this.location.back(); 
    }

    navigateToExternalURL() {
      const externalURL = 'https://www.datafin.com/job/junior-software-developer-c-net-mvc-ui-ux/?action=register&vacid=24295';
      window.open(externalURL, '_blank'); // Open in a new tab or window
    }
    
}
