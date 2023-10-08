import { Component } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent {

  // Sample data model for tutors
  allTutors = [
    { name: 'Alice Thompson', subject: 'Mathematics', location: 'New York', rate: 40, specialization: 'Algebra, Calculus' },
    { name: 'Bob Carter', subject: 'Physics', location: 'Los Angeles', rate: 45, specialization: 'Classical Mechanics, Quantum Physics' },
    // ... (add all the tutors here)
  ];

  displayedTutors = [...this.allTutors];  // Tutors to be displayed after applying filters

  // Filter properties bound to the dropdowns in the HTML
  selectedSubject: string = 'all';
  selectedLocation: string = 'all';
  selectedRate: string = 'all';

  // Method to apply filters based on selected values
  applyFilters(): void {
    this.displayedTutors = this.allTutors.filter(tutor => {
      return (this.selectedSubject === 'all' || tutor.subject === this.selectedSubject) &&
             (this.selectedLocation === 'all' || tutor.location === this.selectedLocation) &&
             (this.selectedRate === 'all' || 
              (this.selectedRate === 'below-30' && tutor.rate < 30) ||
              (this.selectedRate === '30-40' && tutor.rate >= 30 && tutor.rate <= 40) ||
              (this.selectedRate === 'above-40' && tutor.rate > 40));
    });
  }

  clearFilters(): void {
    this.selectedSubject = 'all';
    this.selectedLocation = 'all';
    this.selectedRate = 'all';
    this.displayedTutors = [...this.allTutors];  // Reset the displayed tutors to show all
}

}
