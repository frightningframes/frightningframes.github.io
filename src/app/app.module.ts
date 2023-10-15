import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BITComponent } from './bit/bit.component';
import { CompSciComponent } from './comp-sci/comp-sci.component';
import { BScITComponent } from './bsc-it/bsc-it.component';
import { CompEngComponent } from './comp-eng/comp-eng.component';
import { InformaticsComponent } from './informatics/informatics.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { JobsComponent } from './jobs/jobs.component';
import { PastPapersComponent } from './past-papers/past-papers.component';
import { TutorsComponent } from './tutors/tutors.component';
import { FormsModule } from '@angular/forms';
import { StudyGroupsComponent } from './study-groups/study-groups.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CoursesComponent,
    NavbarComponent,
    BITComponent,
    CompSciComponent,
    BScITComponent,
    CompEngComponent,
    InformaticsComponent,
    MultimediaComponent,
    JobsComponent,
    PastPapersComponent,
    TutorsComponent,
    StudyGroupsComponent,
    ProfileComponent,
    QuizComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
