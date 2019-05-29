import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {AddHeroComponent} from './heroes/add-hero/add-hero.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent,
    children: [
      {path: 'hero/:id', component: HeroDetailComponent}]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'add-hero', component: AddHeroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
