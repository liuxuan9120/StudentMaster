import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClassesComponent } from './components/classes/classes.component';
import { SharedModule } from '@shared';
import { MaterialModule } from 'app/material.module';
import { InviteUserComponent } from './components/modal/invite-user/invite-user.component';


@NgModule({
  declarations: [ClassesComponent, InviteUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  entryComponents: [InviteUserComponent],
})
export class AdminModule { }
