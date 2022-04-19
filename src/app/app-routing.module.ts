import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
 {path :'', component: HomepageComponent},
  { path: 'repository', component: RepositoryComponent},
  { path: 'users', component: SearchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
