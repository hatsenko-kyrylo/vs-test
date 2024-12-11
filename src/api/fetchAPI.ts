import { transformMealData } from '../utils/transformData';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getAllMeals = async () => {
    try {
        const response = await fetch(`${BASE_URL}/search.php?s=`);
        const data = await response.json();

        return data.meals.map(transformMealData);
    } catch (error) {
        console.error('Error fetching files:', error);
        throw error;
    }
};
export const getMeal = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
        const data = await response.json();

        return transformMealData(data.meals[0]);
    } catch (error) {
        console.error('Error fetching file:', error);
        throw error;
    }
};
export const searchMeal = async (query: string) => {
    try {
        const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
        const data = await response.json();

        if (!data.meals) return [];

        return data.meals.map(transformMealData);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
