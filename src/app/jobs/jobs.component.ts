import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  
  constructor(private location: Location) {}

 
    goBack(): void {
      this.location.back(); 
    }
}
