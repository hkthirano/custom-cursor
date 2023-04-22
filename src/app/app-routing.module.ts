import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Method1Component } from './method1/method1.component';
import { Method2Component } from './method2/method2.component';

const routes: Routes = [
  { path: 'method1', component: Method1Component },
  { path: 'method2', component: Method2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
