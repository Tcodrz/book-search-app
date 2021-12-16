import { LoaderComponent } from './../core/loader/loader.component';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';


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
    LoaderComponent,
    VirtualScrollerModule,
    DialogModule
  ],
})
export class PrimengModule { }
