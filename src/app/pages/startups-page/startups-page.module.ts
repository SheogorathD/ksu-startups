import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StartupsPageRoutingModule } from './startups-page-routing.module';
import { StartupsPageComponent } from './startups-page.component';

@NgModule({
  declarations: [StartupsPageComponent],
  imports: [CommonModule, StartupsPageRoutingModule],
})
export class StartupsPageModule {}
