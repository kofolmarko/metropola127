import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './components/team/team.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
