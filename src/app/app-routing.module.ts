import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login'},
  { path: 'grades', children: [
      { path: 'detail/:id'}
    ]},
  { path: 'subject', children: [
      { path: 'modify/:id'},
      { path: 'new'}
    ]},
  { path: 'homework'},
  { path: 'school'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
