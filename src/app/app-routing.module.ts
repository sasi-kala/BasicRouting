import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {path:'first',component: FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'empty', component: EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
