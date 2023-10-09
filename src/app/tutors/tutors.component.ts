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
      image: 'assets/images/david.jpg',
      description: 'David has a knack for making complex COS330 concepts simple and has two years of tutoring experience.'
    },
    { 
      Module:'COS301', name: 'Eva Martin', rate: '50', experience:'3',
      image: 'assets/images/eva.jpg',
      description: 'Eva enjoys helping students navigate through the intricacies of the COS301 module.'
    },
    { 
      Module:'COS341', name: 'David Lee', rate: '55', experience:'1',
      image: 'assets/images/david.jpg',
      description: 'David is well-versed with COS341 and helps students in understanding its multifaceted concepts.'
    },
    { 
      Module:'IMY310', name: 'Eva Martin', rate: '50', experience:'3',
      image: 'assets/images/eva.jpg',
      description: 'With a thorough understanding of IMY310, Eva aims to create a solid foundational knowledge for her students.'
    },
    { 
      Module:'IMY320', name: 'David Lee', rate: '55', experience:'4+',
      image: 'assets/images/david.jpg',
      description: 'David is an expert tutor for IMY320, having more than four years of experience in the module.'
    },
    { 
      Module:'COS333', name: 'Sophia Rodriguez', rate: '45', experience:'2',
      image: 'assets/images/sophia.jpg',
      description: 'Sophia has a systematic approach to tutoring COS333, ensuring concepts are easy and fun to learn.'
    },
    { 
      Module:'COS330', name: 'Michael Smith', rate: '60', experience:'3',
      image: 'assets/images/michael.jpg',
      description: 'Michael’s robust teaching strategy for COS330 ensures that students grasp even the most complex topics easily.'
    },
    { 
      Module:'COS301', name: 'Sophia Rodriguez', rate: '45', experience:'1',
      image: 'assets/images/sophia.jpg',
      description: 'Sophia is dedicated to making COS301 easy to understand, utilizing her own student experiences to aid her teaching.'
    },
    { 
      Module:'COS341', name: 'Michael Smith', rate: '60', experience:'2',
      image: 'assets/images/michael.jpg',
      description: 'Michael believes in an interactive tutoring approach for COS341, ensuring active student participation.'
    },
    { 
      Module:'IMY310', name: 'Sophia Rodriguez', rate: '45', experience:'2',
      image: 'assets/images/sophia.jpg',
      description: 'Sophia combines theory and practical examples to make IMY310 learning a wholesome experience.'
    },
    { 
      Module:'IMY320', name: 'Michael Smith', rate: '60', experience:'4+',
      image: 'assets/images/michael.jpg',
      description: 'Michael leverages his extensive experience to make IMY320 tutoring sessions informative and engaging.'
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
}
