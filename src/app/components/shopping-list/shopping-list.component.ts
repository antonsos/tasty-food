import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shred/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  /**
   * variables
   */
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6),
  ];
  constructor() { }

  ngOnInit() {
  }

}
