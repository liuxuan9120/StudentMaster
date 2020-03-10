import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClassesComponent } from './components/classes/classes.component';
import { SharedModule } from '@shared';
import { MaterialModule } from 'app/material.module';
import { InviteUserComponent } from './components/modal/invite-user/invite-user.component';
import { EditSubjectsInClassComponent } from './components/modal/edit-subjects-in-class/edit-subjects-in-class.component';
import { EditTeachersInClassComponent } from './components/modal/edit-teachers-in-class/edit-teachers-in-class.component';
import { UsersComponent } from './components/users/users.component';
import { ChangeRolesComponent } from './components/modal/change-roles/change-roles.component';


@NgModule({
  declarations: [ClassesComponent, InviteUserComponent, EditSubjectsInClassComponent, EditTeachersInClassComponent, UsersComponent, ChangeRolesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  entryComponents: [InviteUserComponent, EditSubjectsInClassComponent, EditTeachersInClassComponent, ChangeRolesComponent],
})
export class AdminModule { }
