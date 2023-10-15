import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isPastPapers: boolean =false;
isStudy: boolean = false;
isTutor: boolean = false;
isJobs: boolean = false;
isAbout: boolean=false;
// isMultimedia: boolean=false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPastPapers = this.router.url === '/pastpapers';
        this.isStudy = this.router.url === '/studygroups';
        this.isTutor = this.router.url === '/tutors';
        this.isJobs = this.router.url === '/jobs';
        this.isAbout = this.router.url === '/about';
        // this.isMultimedia = this.router.url === '/Multimedia';
      }
    });
  }
}
