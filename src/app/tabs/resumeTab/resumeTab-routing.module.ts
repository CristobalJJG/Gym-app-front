import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeTab } from './resumeTab.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeTabRoutingModule { }
