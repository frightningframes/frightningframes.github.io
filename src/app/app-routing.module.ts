import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BITComponent } from './bit/bit.component';
import { CompSciComponent } from './comp-sci/comp-sci.component';
import { CompEngComponent } from './comp-eng/comp-eng.component';
import { BScITComponent } from './bsc-it/bsc-it.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { InformaticsComponent } from './informatics/informatics.component';
import { JobsComponent } from './jobs/jobs.component';
import { PastPapersComponent } from './past-papers/past-papers.component';
import { TutorsComponent } from './tutors/tutors.component';
import { StudyGroupsComponent } from './study-groups/study-groups.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'home', component: HomeComponent },
{ path: 'course', component: CoursesComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'BIT', component: BITComponent },
{ path: 'CompSci', component: CompSciComponent },
{ path: 'CompEng', component: CompEngComponent },
{ path: 'BScIT', component: BScITComponent },
{ path: 'Multimedia', component: MultimediaComponent },
{ path: 'Informatics', component: InformaticsComponent },
{path: 'jobs', component: JobsComponent},
{path: 'pastpapers', component: PastPapersComponent},
{path: 'tutors', component: TutorsComponent},
{path: 'studygroups', component: StudyGroupsComponent},
{path: 'quiz', component: QuizComponent},
{path: 'profile', component: ProfileComponent},
{path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
