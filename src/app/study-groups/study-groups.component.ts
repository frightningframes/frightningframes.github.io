import { Component } from '@angular/core';

interface StudyGroup {
  Module: string;
  Type: string;
}


@Component({
  selector: 'app-study-groups',
  templateUrl: './study-groups.component.html',
  styleUrls: ['./study-groups.component.css']
})
export class StudyGroupsComponent {

  study: StudyGroup[] = [
    { Module: 'COS333', Type:'Practical'},
    { Module: 'COS333', Type:'Theory'},
    { Module: 'COS330', Type:'Practical'},
    { Module: 'COS330', Type:'Theory'},
    { Module: 'COS301', Type:'Practical'},
    { Module: 'COS301', Type:'Theory'},
    { Module: 'COS341', Type:'Practical'},
    { Module: 'COS341', Type:'Theory'},
    { Module: 'IMY310', Type:'Practical'},
    { Module: 'IMY310', Type:'Theory'},
    { Module: 'IMY320', Type:'Practical'},
    { Module: 'IMY320', Type:'Theory'},
   
    // Add more past papers here
];



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
}
