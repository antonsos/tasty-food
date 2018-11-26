import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RecipesComponent} from './components/recipes/recipes.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';

const routes: Route[] = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, children: [
    {path: ':id', component: RecipeDetailComponent}
  ]},
  {path: 'shopping', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
