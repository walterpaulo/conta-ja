import { ContaListComponent } from './views/conta/conta-list/conta-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContaFormComponent } from './views/conta/conta-form/conta-form.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';
import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [AppComponent, ContaListComponent, ContaFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ToggleButtonModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule,
    ToastModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
