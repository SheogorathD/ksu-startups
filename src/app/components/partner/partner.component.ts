import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Partner } from 'src/app/models';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerComponent implements OnInit {
  @Input() partner!: Partner;
  constructor() {}

  ngOnInit(): void {}
}
