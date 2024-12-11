import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getMeal } from '@/api/fetchAPI';
import { formatedTags } from '@/utils/utils';

import Spinner from '@/components/Spinner';
import PageNotFound from '../PageNotFound';
import BackButton from '@/components/BackButton';
import IngredientsList from '@/components/IngredientsList';
import SourceLink from '@/components/SourceLink';
import './mealPage.scss';

const MealPage = () => {
    const { mealId } = useParams();
    const { data, error, isFetching } = useQuery({
        queryKey: ['meal', mealId],
        queryFn: () => getMeal(mealId!),
        enabled: !!mealId,
    });

    if (isFetching) return <Spinner />;
    if (error || !data) return <PageNotFound text='Meal not found' />;

    const {
        strMeal,
        strArea,
        strCategory,
        strTags,
        strMealThumb,
        ingredients,
        measures,
        strInstructions,
        strSource,
        strYoutube,
    } = data;

    return (
        <>
            <div className='meal-page glassmorphism'>
                <BackButton />
                <div className='container'>
                    <div className='meal-page__main'>
                        <div className='meal-page__main-info'>
                            <div className='meal-page__main-info-header'>
                                <p className='meal-page__main-info-header-title'>{strMeal}</p>
                                <p className='meal-page__main-info-header-area'>{`${strArea} cuisine`}</p>
                            </div>
                            <div className='meal-page__main-info-footer'>
                                <p
                                    className='meal-page__main-info-footer-category'
                                    style={{ marginBottom: strTags ? 20 : 0 }}
                                >
                                    {`Category: ${strCategory}`}
                                </p>
                                <p className='meal-page__main-info-footer-tags'>
                                    {strTags ? formatedTags(strTags) : null}
                                </p>
                            </div>
                        </div>
                        <img className='meal-page__main-image' src={strMealThumb} alt={strMeal} />
                    </div>
                    <IngredientsList
                        ingredients={ingredients}
                        measures={measures}
                        addStyles={'meal-page__ingredients'}
                    />
                    <div className='meal__instructions'>{strInstructions}</div>
                    <div className='meal-page__footer'>
                        <SourceLink
                            strSource={strSource}
                            title='Source'
                            notAvailableText='Source not available'
                        />
                        <SourceLink
                            strSource={strYoutube}
                            title='YouTube Guide'
                            notAvailableText='YouTube Guide not available'
                        />
                    </div>
                </div>
            </div>
            <div className='background-image'></div>
        </>
    );
};

export default MealPage;
