import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from './components/repository/repository.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
 {path :'', component: HomepageComponent},
  { path: 'repository', component: RepositoryComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
