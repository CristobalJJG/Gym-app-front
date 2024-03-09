import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumeTab } from './resumeTab.page';
import { ResumeTabRoutingModule } from './resumeTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResumeTabRoutingModule
  ],
  declarations: [ResumeTab]
})
export class ResumeTabModule { }
