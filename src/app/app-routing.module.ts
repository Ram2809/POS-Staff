import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './Staff/add-order/add-order.component';
import { ProcessOrderComponent } from './Staff/process-order/process-order.component';

const routes: Routes = [
  {path:'add-order',component:AddOrderComponent},
  {path:'process-order',component:ProcessOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
