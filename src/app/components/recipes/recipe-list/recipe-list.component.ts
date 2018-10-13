import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
// variables
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is test recipe for coocies',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    ),
    new Recipe(
      'Test2 recipe',
      'This is test2 recipe for coocies',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
