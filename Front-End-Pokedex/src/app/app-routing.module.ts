import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pokemon/home/home.component';
import { MyPokedexComponent } from './components/pokemon/my-pokedex/my-pokedex.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'mypokedex', component: MyPokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
