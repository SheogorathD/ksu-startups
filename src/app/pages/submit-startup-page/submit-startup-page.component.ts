import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-startup-page',
  templateUrl: './submit-startup-page.component.html',
  styleUrls: ['./submit-startup-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitStartupPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}