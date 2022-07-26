import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pokemon/home/home.component';
import { MyPokedexComponent } from './components/pokemon/my-pokedex/my-pokedex.component';
import { AboutComponent } from './pages/about/about.component';
import { CadExternoComponent } from './pages/cad-externo/cad-externo.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthValidGuard } from './services/auth-valid.guard';
import { AuthenticateGuard } from './services/authenticate.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'mypokedex', component: MyPokedexComponent, canActivate:[AuthValidGuard]},
  {path: 'login', component:LoginComponent, canActivate:[AuthenticateGuard]},
  {path: 'cadastrar', component:CadExternoComponent, canActivate:[AuthenticateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
