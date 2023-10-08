import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isBit: boolean =false;
isCompSci: boolean = false;
isBscIt: boolean = false;
isCompEng: boolean = false;
isInformatics: boolean=false;
isMultimedia: boolean=false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBit = this.router.url === '/BIT';
        this.isCompSci = this.router.url === '/CompSci';
        this.isBscIt = this.router.url === '/BScIT';
        this.isCompEng = this.router.url === '/CompEng';
        this.isInformatics = this.router.url === '/Informatics';
        this.isMultimedia = this.router.url === '/Multimedia';
      }
    });
  }
}
