import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe';
import { RecipesService } from './recipes.service';
export declare class RecipesResolver {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    recipe(id: string): Promise<Recipe>;
    recipes(recipesArgs: RecipesArgs): Promise<Recipe[]>;
    addRecipe(newRecipeData: NewRecipeInput): Promise<Recipe>;
    removeRecipe(id: string): Promise<boolean>;
    recipeAdded(): AsyncIterator<unknown, any, undefined>;
}
