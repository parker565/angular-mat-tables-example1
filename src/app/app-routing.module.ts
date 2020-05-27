import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TableTwoComponent } from './components/table-two/table-two.component';


const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'table', component: TableComponent},
  {path: 'table2', component: TableTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
