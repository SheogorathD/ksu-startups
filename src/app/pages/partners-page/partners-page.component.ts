import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
