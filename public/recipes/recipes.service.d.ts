import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe';
export declare class RecipesService {
    create(data: NewRecipeInput): Promise<Recipe>;
    findOneById(id: string): Promise<Recipe>;
    findAll(recipesArgs: RecipesArgs): Promise<Recipe[]>;
    remove(id: string): Promise<boolean>;
}
