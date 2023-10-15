import { Component, OnInit  } from '@angular/core';
import { Location } from '@angular/common';

interface PastPaper {
  Year: string;
  Module: string;
  Assessment: string;
}

@Component({
  selector: 'app-past-papers',
  templateUrl: './past-papers.component.html',
  styleUrls: ['./past-papers.component.css']
})
export class PastPapersComponent {

  donutChartData: number[] = [30, 70]; // Example data
  donutChartLabels: string[] = ['Completed', 'Remaining']; 

  constructor(private location: Location) {}
  pastPapers: PastPaper[] = [
    { Year: '2018', Module: 'COS333', Assessment: 'Tutorial 1' },
    { Year: '2019', Module: 'COS301', Assessment: 'Class test 1' },
    { Year: '2020', Module: 'IMY320', Assessment: 'Semester test 1' },
    { Year: '2021', Module: 'COS341', Assessment: 'Semester test 2' },
    { Year: '2022', Module: 'IMY310', Assessment: 'Tutorial 2' },
    { Year: '2023', Module: 'COS330', Assessment: 'Exam' },
    { Year: '2019', Module: 'COS333', Assessment: 'Tutorial 2' },
    { Year: '2020', Module: 'COS301', Assessment: 'Class test 2' },
    { Year: '2021', Module: 'IMY310', Assessment: 'Class test 3' },
    { Year: '2022', Module: 'COS341', Assessment: 'Exam' },
    { Year: '2018', Module: 'IMY320', Assessment: 'Tutorial 3' },
    { Year: '2019', Module: 'COS333', Assessment: 'Tutorial 3' },
    { Year: '2020', Module: 'COS301', Assessment: 'Class test 3' },
    { Year: '2021', Module: 'COS341', Assessment: 'Semester test 1' },
    { Year: '2022', Module: 'IMY310', Assessment: 'Semester test 2' },
    // Add more past papers here
];


ngOnInit(): void {
  this.filteredPapers = this.pastPapers;
}

  filteredPapers: PastPaper[] = []; // Initialize an array for filtered papers
  paper = {}
  filterPapers(year: string, module_: string, assessment: string): void {
  // console.log('Year:', year);
  // console.log('Module:', module_);
  // console.log('Assessment:', assessment);
    this.paper = this.filteredPapers[0]
    this.filteredPapers = this.pastPapers.filter(paper =>
      (year === '' || paper.Year === year) &&
      (module_ === '' || paper.Module === module_) &&
      (assessment === '' || paper.Assessment === assessment)
    );
  // console.log(this.filteredPapers)
  }

  goBack(): void {
    this.location.back(); 
  }

  navigateToExternalURL() {
    const externalURL = 'https://gradfast.com/modules';
    window.open(externalURL, '_blank'); // Open in a new tab or window
  }
}
