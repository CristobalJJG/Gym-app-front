import { Component } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-resume-tab',
  templateUrl: 'resumeTab.page.html',
  styleUrls: ['resumeTab.page.scss']
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ResumeTab {

  protected allTrainings: Training[] = [];

  constructor(private ts: TrainingsService) {
    this.ts.getTrainings().then((res) => {
      res.data.map((training: any) => {
        let t = training.fields;
        this.allTrainings.push(new Training(training.pk, t.fecha, t.duracion, t.calorias));
      });
    });
  }


}
