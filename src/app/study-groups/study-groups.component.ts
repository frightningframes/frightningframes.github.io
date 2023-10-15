import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

interface StudyGroup {
  Module: string;
  Type: string;
  Participants: string;
  Settings: string;
  StudyType: string;
}


@Component({
  selector: 'app-study-groups',
  templateUrl: './study-groups.component.html',
  styleUrls: ['./study-groups.component.css']
})
export class StudyGroupsComponent {

  constructor(private location: Location) {}

  study: StudyGroup[] = [
    { Module: 'COS330', Type: 'Casual', Participants: '65', Settings: 'In-Person', StudyType: 'Practical' },
    { Module: 'COS301', Type: 'Academic', Participants: '18', Settings: 'Online', StudyType: 'Theoretical' },
    { Module: 'COS333', Type: 'Casual', Participants: '57', Settings: 'In-Person', StudyType: 'Practical' },
    { Module: 'COS341', Type: 'Academic', Participants: '35', Settings: 'Online', StudyType: 'Theoretical' },
    { Module: 'IMY310', Type: 'Casual', Participants: '62', Settings: 'In-Person', StudyType: 'Practical' },
    { Module: 'IMY320', Type: 'Academic', Participants: '35', Settings: 'Online', StudyType: 'Theoretical' },
    { Module: 'COS330', Type: 'Casual', Participants: '81', Settings: 'In-Person', StudyType: 'Practical' },
    { Module: 'COS314', Type: 'Academic', Participants: '66', Settings: 'Online', StudyType: 'Theoretical' },
    { Module: 'IMY320', Type: 'Casual', Participants: '92', Settings: 'In-Person', StudyType: 'Practical' },
    { Module: 'IMY310', Type: 'Academic', Participants: '100', Settings: 'Online', StudyType: 'Theoretical' },
    { Module: 'COS333', Type: 'Academic', Participants: '72', Settings: 'In-Person', StudyType: 'Practical' },
    { Module: 'COS341', Type: 'Casual', Participants: '46', Settings: 'Online', StudyType: 'Theoretical' },
    // Add more study groups here
  ];
  
  

ngOnInit(): void {
  this.filteredGroups = this.study;  // Showing all study groups initially
}


  filteredGroups: StudyGroup[] = []; // Initialize an array for filtered papers
  group = {}
  filterGroups(module_: string,): void {
  // console.log('Year:', year);
  console.log('Module:', module_);
  // console.log('Assessment:', assessment);
    this.group = this.filteredGroups[0]
    this.filteredGroups = this.study.filter(group =>
      (module_ === '' || group.Module === module_)
    );
  console.log(this.filteredGroups)
  }

  goBack(): void {
    this.location.back(); 
  }

  navigateToExternalURL() {
    const externalURL = 'https://linksfunda.com/study-whatsapp-group-link/';
    window.open(externalURL, '_blank'); // Open in a new tab or window
  }
}
