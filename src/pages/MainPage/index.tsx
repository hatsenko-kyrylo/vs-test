import { useState, useEffect } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getAllMeals, searchMeal } from '@/api/fetchAPI';

import { filterMealsByCategory, paginateMeals } from '@/utils/utils';
import Search from '@/components/Search';
import MealList from '@/components/MealList';
import Pagination from '@/components/Pagination';
import savedMealsIcon from '@/assets/saved-meals.svg';
import './mainPage.scss';

const ITEMS_PER_PAGE = 3;

const MainPage = () => {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const navigate = useNavigate();

    const { data, isFetching } = useQuery({
        queryKey: ['meals', query],
        queryFn: () => (query ? searchMeal(query) : getAllMeals()),
        placeholderData: keepPreviousData,
    });

    const filteredMeals = filterMealsByCategory(data || [], selectedCategory);
    const paginatedMeals = paginateMeals(filteredMeals, currentPage, ITEMS_PER_PAGE);
    const totalPages = Math.ceil(filteredMeals.length / ITEMS_PER_PAGE);

    useEffect(() => {
        setCurrentPage(1);
    }, [query, selectedCategory]);

    return (
        <>
            <div className='page main-page'>
                <div className='main-page__saved-link' onClick={() => navigate('/saved')}>
                    <img src={savedMealsIcon} alt='Saved Meals' />
                    <p>Saved Meals</p>
                </div>
                <Search
                    onSearch={(value) => setQuery(value.trim())}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <MealList
                    isPending={isFetching}
                    meals={paginatedMeals}
                    onCategoryClick={setSelectedCategory}
                    showIngredientsAndInstructions={false}
                    noFoundText='No meals found'
                />
                {paginatedMeals.length > 0 && (
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </div>
            <div className='background-stub'></div>
        </>
    );
};

export default MainPage;
