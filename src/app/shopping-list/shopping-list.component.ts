import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.html',
  styleUrls: ['./shopping-list.scss']
})
export class ShoppingListComponent {
  shoppingList = ["eggs", "bread"];
  newItem = "";

  onAdd () {
    if (this.newItem.trim()) {
      this.shoppingList.push(this.newItem);
      this.newItem = "";
    }
  }
}
