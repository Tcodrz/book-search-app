import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [],
  exports: [
    InputTextModule,
    FieldsetModule,
    OrderListModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
