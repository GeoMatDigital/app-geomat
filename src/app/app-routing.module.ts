import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileList1Component } from './profiles/profile-list-1/profile-list-1.component';
import { ProfileList2Component } from './profiles/profile-list-2/profile-list-2.component';
import { ProfileDetailsComponent } from './profiles/profile-details/profile-details.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'profiles',
        component: ProfileList1Component
      },
      {
        path: 'profiles/:profilesID',
        component: ProfileList2Component
      },
      {
        path: 'profiles/:profilesID/:id',
        component: ProfileDetailsComponent
      },
      {
        path: '**',
        component: PagenotfoundComponent
      }
    ]
  }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }