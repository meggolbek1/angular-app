import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListComponent} from "./shopping-list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  exports: [
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class ShoppingListModule { }
