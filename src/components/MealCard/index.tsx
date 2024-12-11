import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IMeal } from '@/types';
import saveMealIcon from '@/assets/plus.svg';
import IngredientsList from '../IngredientsList';
import './mealCard.scss';

interface IMealCardProps {
    data: IMeal;
    onCategoryClick?: (category: string) => void;
    showIngredientsAndInstructions?: boolean;
}

const MealCard = ({ data, onCategoryClick, showIngredientsAndInstructions }: IMealCardProps) => {
    const navigate = useNavigate();
    const {
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        idMeal,
        strInstructions,
        ingredients,
        measures,
    } = data;
    const queryClient = useQueryClient();

    const savedMeals = queryClient.getQueryData<IMeal[]>(['savedMeals']) || [];
    const isSaved = savedMeals.some((meal) => meal.idMeal === idMeal);

    const saveMealMutation = useMutation({
        mutationFn: async (meal: IMeal) => {
            const currentSavedMeals = queryClient.getQueryData<IMeal[]>(['savedMeals']) || [];
            queryClient.setQueryData(['savedMeals'], [...currentSavedMeals, meal]);
        },
    });

    const handleSaveMeal = () => {
        saveMealMutation.mutate(data);
    };
    const redirectToMealPage = (id: string) => {
        navigate(`/meal/${id}`);
    };

    return (
        <li className='meal-card' key={idMeal}>
            <div className='meal-card__wrap'>
                <div className='meal-card__wrap-info'>
                    <div className='meal-card__wrap-info-header'>
                        <h3
                            className='meal-card__wrap-info-header-title'
                            onClick={() => redirectToMealPage(idMeal)}
                        >
                            {strMeal}
                        </h3>
                        <p className='meal-card__wrap-info-header-area'>{`${strArea} cuisine`}</p>
                    </div>
                    <div
                        className={`meal-card__wrap-info-save ${isSaved ? 'hidden' : ''}`}
                        onClick={handleSaveMeal}
                    >
                        <img src={saveMealIcon} alt='Save meal' />
                    </div>
                    {!showIngredientsAndInstructions ? (
                        <p
                            className='meal-card__wrap-info-category'
                            onClick={() => onCategoryClick && onCategoryClick(strCategory)}
                        >
                            {strCategory}
                        </p>
                    ) : (
                        <IngredientsList ingredients={ingredients} measures={measures} />
                    )}
                </div>
                <img
                    className='meal-card__wrap-image'
                    src={strMealThumb}
                    alt={strMeal}
                    onClick={() => redirectToMealPage(idMeal)}
                />
            </div>
            {showIngredientsAndInstructions && (
                <p className='meal__instructions'>
                    {strInstructions.length > 180
                        ? `${strInstructions.slice(0, 180)}...`
                        : strInstructions}
                </p>
            )}
        </li>
    );
};

export default MealCard;
