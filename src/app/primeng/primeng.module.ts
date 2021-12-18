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
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    FieldsetModule,
    InputTextModule,
    LoaderComponent,
    MenubarModule,
    OrderListModule,
    ProgressSpinnerModule,
    ToastModule,
    VirtualScrollerModule,
  ],
})
export class PrimengModule { }
