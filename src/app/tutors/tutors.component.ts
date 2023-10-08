import { Component } from '@angular/core';

interface Tutors {
  Module: string;
  name:string;
  rate: string;
  experience: string;
}

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent {


  study: Tutors[] = [
    { Module:'COS333', name: 'Eva Martin',  rate: '50', experience:'3' },
    { Module:'COS330', name: 'David Lee', rate: '55', experience:'2' },
    { Module:'COS301', name: 'Eva Martin',  rate: '50', experience:'3' },
    { Module:'COS341', name: 'David Lee', rate: '55', experience:'1' },
    { Module:'IMY310', name: 'Eva Martin',  rate: '50', experience:'3' },
    { Module:'IMY320', name: 'David Lee', rate: '55', experience:'4+' },
    { Module:'COS333', name: 'Sophia Rodriguez',  rate: '45', experience:'2' },
    { Module:'COS330', name: 'Michael Smith', rate: '60', experience:'3' },
    { Module:'COS301', name: 'Sophia Rodriguez',  rate: '45', experience:'1' },
    { Module:'COS341', name: 'Michael Smith', rate: '60', experience:'2' },
    { Module:'IMY310', name: 'Sophia Rodriguez',  rate: '45', experience:'2' },
    { Module:'IMY320', name: 'Michael Smith', rate: '60', experience:'4+' },
    // Add more tutors here
];


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
}
