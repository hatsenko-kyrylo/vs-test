export interface IMealDto {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string | null;
    strYoutube: string;
    strSource: string;
    [key: `strIngredient${number}`]: string;
    [key: `strMeasure${number}`]: string;
}

export interface IMeal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string | null;
    strYoutube: string;
    strSource: string;
    ingredients: string[];
    measures: string[];
}

export interface IMealsApiResponse {
    meals: IMeal[];
}
