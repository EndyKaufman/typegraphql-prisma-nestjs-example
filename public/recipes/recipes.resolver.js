"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const new_recipe_input_1 = require("./dto/new-recipe.input");
const recipes_args_1 = require("./dto/recipes.args");
const recipe_1 = require("./models/recipe");
const recipes_service_1 = require("./recipes.service");
const pubSub = new graphql_subscriptions_1.PubSub();
let RecipesResolver = class RecipesResolver {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    async recipe(id) {
        const recipe = await this.recipesService.findOneById(id);
        if (!recipe) {
            throw new common_1.NotFoundException(id);
        }
        return recipe;
    }
    recipes(recipesArgs) {
        return this.recipesService.findAll(recipesArgs);
    }
    async addRecipe(newRecipeData) {
        const recipe = await this.recipesService.create(newRecipeData);
        pubSub.publish('recipeAdded', { recipeAdded: recipe });
        return recipe;
    }
    async removeRecipe(id) {
        return this.recipesService.remove(id);
    }
    recipeAdded() {
        return pubSub.asyncIterator('recipeAdded');
    }
};
exports.RecipesResolver = RecipesResolver;
__decorate([
    (0, graphql_1.Query)((returns) => recipe_1.Recipe),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "recipe", null);
__decorate([
    (0, graphql_1.Query)((returns) => [recipe_1.Recipe]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_args_1.RecipesArgs]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "recipes", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => recipe_1.Recipe),
    __param(0, (0, graphql_1.Args)('newRecipeData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_recipe_input_1.NewRecipeInput]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "addRecipe", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "removeRecipe", null);
__decorate([
    (0, graphql_1.Subscription)((returns) => recipe_1.Recipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecipesResolver.prototype, "recipeAdded", null);
exports.RecipesResolver = RecipesResolver = __decorate([
    (0, graphql_1.Resolver)((of) => recipe_1.Recipe),
    __metadata("design:paramtypes", [recipes_service_1.RecipesService])
], RecipesResolver);
//# sourceMappingURL=recipes.resolver.js.map