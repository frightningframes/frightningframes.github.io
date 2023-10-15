import { Component } from '@angular/core';
import { Location } from '@angular/common';

interface Tutors {
  Module: string;
  name:string;
  rate: string;
  experience: string;
  image : string;
  description:string;
}

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent {

  constructor(private location: Location) {}

  study: Tutors[] = [
    { 
      Module:'COS333', name: 'Eva Martin', rate: '50', experience:'3',
      image: 'assets/tutor1.webp',
      description: 'Eva has a passion for computing and enjoys teaching COS333 with a practical approach.'
    },
    { 
      Module:'COS330', name: 'David Lee', rate: '55', experience:'2',
      image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      description: 'David has a knack for making complex COS330 concepts simple and has two years of tutoring experience.'
    },
    { 
      Module:'COS301', name: 'Louisa Meyer', rate: '50', experience:'3',
      image: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Louisa enjoys helping students navigate through the intricacies of the COS301 module.'
    },
    { 
      Module:'COS341', name: 'Martin Bester', rate: '55', experience:'1',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      description: 'Marti is well-versed with COS341 and helps students in understanding its multifaceted concepts.'
    },
    { 
      Module:'IMY310', name: 'Stacy Smith', rate: '50', experience:'3',
      image: 'https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      description: 'With a thorough understanding of IMY310, Stacy aims to create a solid foundational knowledge for her students.'
    },
    { 
      Module:'IMY320', name: 'Johnathan Kruger', rate: '55', experience:'4+',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
      description: 'Johnathan is an expert tutor for IMY320, having more than four years of experience in the module.'
    },
    { 
      Module:'COS333', name: 'Sophia Rodriguez', rate: '45', experience:'2',
      image: 'https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Sophia has a systematic approach to tutoring COS333, ensuring concepts are easy and fun to learn.'
    },
    { 
      Module:'COS330', name: 'Michael Smith', rate: '60', experience:'3',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Michael’s robust teaching strategy for COS330 ensures that students grasp even the most complex topics easily.'
    },
    { 
      Module:'COS301', name: 'Lydia Grace', rate: '45', experience:'1',
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      description: 'Lydia is dedicated to making COS301 easy to understand, utilizing her own student experiences to aid her teaching.'
    },
    { 
      Module:'COS341', name: 'Franco Gouws', rate: '60', experience:'2',
      image: 'https://plus.unsplash.com/premium_photo-1666265087928-fe19db9887ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Michael believes in an interactive tutoring approach for COS341, ensuring active student participation.'
    },
    { 
      Module:'IMY310', name: 'Amelia Hughes', rate: '45', experience:'2',
      image: 'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1903&q=80',
      description: 'Amelia combines theory and practical examples to make IMY310 learning a wholesome experience.'
    },
    { 
      Module:'IMY320', name: 'Xander Nel', rate: '60', experience:'4+',
      image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Xander leverages his extensive experience to make IMY320 tutoring sessions informative and engaging.'
    }
  ];
  

ngOnInit(): void {
  this.filteredGroups = this.study;
}

  filteredGroups: Tutors[] = []; // Initialize an array for filtered papers
  group = {}
  filterGroups(module_: string, experience: string): void {
   console.log('Module:', module_);

  // console.log('Assessment:', assessment);
    this.group = this.filteredGroups[0]
    this.filteredGroups = this.study.filter(group =>
      (module_ === '' || group.Module === module_) &&
      (experience === '' || group.experience === experience) 
    );
  }

  goBack(): void {
    this.location.back(); 
  }

  navigateToExternalURL() {
    const externalURL = 'https://www.teachme2.com/tutors-sandton?campaignid=1522289648&adgroupid=61121397987&feeditemid=59371602795&adposition=&targetid=dsa-1570839335174&loc_physical_ms=1028682&network=g&creative=659147362037&keyword=&matchtype=&device=c&devicemodel=&gad=1&gclid=Cj0KCQjwm66pBhDQARIsALIR2zCTmo4wzlu0WbeqdVLLS8Z0A02Zul3zHab0wjW33-FC91J2K_lFjagaArsXEALw_wcB';
    window.open(externalURL, '_blank'); // Open in a new tab or window
  }
}
