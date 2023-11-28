import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EduQualComponent } from './modules/settings/edu-qual/edu-qual.component';
import { HomeComponent } from './Components/home/home.component';
import { JopTitleComponent } from './modules/settings/jop-title/jop-title.component';
import { GovernorateComponent } from './modules/settings/governorate/governorate.component';
import { BloodTypeComponent } from './modules/settings/blood-type/blood-type.component';
import { BranchComponent } from './modules/settings/branch/branch.component';
import { SectionComponent } from './modules/settings/section/section.component';
import { ManagementComponent } from './modules/settings/management/management.component';
import { ScienceDegreeComponent } from './modules/settings/science-degree/science-degree.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent } ,
  { path: 'settings' ,
    children: [
      { path: 'edu-qual', component: EduQualComponent },
      { path: 'jop-title', component: JopTitleComponent },
      { path: 'governorate', component: GovernorateComponent },
      { path: 'blood-type', component: BloodTypeComponent },
      { path: 'branch', component: BranchComponent },
      { path: 'section', component: SectionComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'science-degree', component: ScienceDegreeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
