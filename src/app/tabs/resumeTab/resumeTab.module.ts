import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumeTab } from './resumeTab.page';
import { ResumeTabRoutingModule } from './resumeTab-routing.module';
import { AddExerciseFormComponent } from 'src/app/forms/add-exercise-form/add-exercise-form.component';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResumeTabRoutingModule,
  ],
  declarations: [ResumeTab, AddExerciseFormComponent, DialogComponent]
})
export class ResumeTabModule { }
