import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: '**', component: NotFoundComponent, title: 'Not FOund' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
