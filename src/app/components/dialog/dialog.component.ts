import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title!: string;
  @Input() idTrigger!: string;

  constructor() { }
}
