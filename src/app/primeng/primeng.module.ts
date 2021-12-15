import { LoaderComponent } from './../core/loader/loader.component';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    InputTextModule,
    FieldsetModule,
    OrderListModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    LoaderComponent
  ],
})
export class PrimengModule { }
