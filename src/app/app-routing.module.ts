import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokupkiComponent } from './pages/pokupki/pokupki.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  {
    path: '',
    component: PokupkiComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }