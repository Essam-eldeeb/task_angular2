import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listenerCount } from 'process';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
// import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'listdetails/:id', component: ListDetailsComponent },
  // {path:"edit/:id",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
