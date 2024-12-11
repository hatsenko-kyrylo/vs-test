import { IMeal, IMealDto } from '@/types';

export const transformMealData = (meal: IMealDto): IMeal => {
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient) ingredients.push(ingredient);
        if (measure && measure.trim() !== '') measures.push(measure);
    }

    return {
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strCategory: meal.strCategory,
        strArea: meal.strArea,
        strInstructions: meal.strInstructions,
        strMealThumb: meal.strMealThumb,
        strTags: meal.strTags,
        strYoutube: meal.strYoutube,
        strSource: meal.strSource,
        ingredients,
        measures,
    };
};
