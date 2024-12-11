import { IMeal } from '@/types';
import { useQuery } from '@tanstack/react-query';

import BackButton from '@/components/BackButton';
import MealList from '@/components/MealList';

const SavedMealsPage = () => {
    const { data: savedMeals = [], isPending } = useQuery<IMeal[]>({
        queryKey: ['savedMeals'],
    });

    return (
        <>
            <div className='page'>
                <BackButton />
                <MealList
                    isPending={isPending}
                    meals={savedMeals}
                    onCategoryClick={() => {}}
                    showIngredientsAndInstructions={true}
                    noFoundText="You don't have any saved meals yet"
                />
            </div>
            <div className='background-image'></div>
        </>
    );
};

export default SavedMealsPage;
