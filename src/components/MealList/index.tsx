import { IMeal } from '@/types';
import Spinner from '@/components/Spinner';
import MealCard from '../MealCard';

interface MealListProps {
    isPending: boolean;
    meals: IMeal[];
    onCategoryClick: (category: string | null) => void;
    showIngredientsAndInstructions?: boolean;
    noFoundText: string;
}

const MealList = ({
    isPending,
    meals,
    onCategoryClick,
    showIngredientsAndInstructions,
    noFoundText,
}: MealListProps) => {
    return (
        <div className='container'>
            {isPending ? (
                <Spinner />
            ) : meals.length > 0 ? (
                <ul>
                    {meals.map((meal: IMeal) => (
                        <MealCard
                            key={meal.idMeal}
                            data={meal}
                            onCategoryClick={onCategoryClick}
                            showIngredientsAndInstructions={showIngredientsAndInstructions}
                        />
                    ))}
                </ul>
            ) : (
                <h1 className='no-found'>{noFoundText}</h1>
            )}
        </div>
    );
};

export default MealList;
