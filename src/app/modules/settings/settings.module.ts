import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduQualComponent } from './edu-qual/edu-qual.component';
import { JopTitleComponent } from './jop-title/jop-title.component';
import { GovernorateComponent } from './governorate/governorate.component';
import { BloodTypeComponent } from './blood-type/blood-type.component';
import { BranchComponent } from './branch/branch.component';
import { SectionComponent } from './section/section.component';
import { ManagementComponent } from './management/management.component';
import { ScienceDegreeComponent } from './science-degree/science-degree.component';



@NgModule({
  declarations: [
    EduQualComponent,
    JopTitleComponent,
    GovernorateComponent,
    BloodTypeComponent,
    BranchComponent,
    SectionComponent,
    ManagementComponent,
    ScienceDegreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EduQualComponent
  ]
})
export class SettingsModule { }
