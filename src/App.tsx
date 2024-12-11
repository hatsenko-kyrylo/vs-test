import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MealPage from './pages/MealPage';
import SavedMealsPage from './pages/SavedMealsPage';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/meal/:mealId' element={<MealPage />} />
                <Route path='/saved' element={<SavedMealsPage />} />
            </Routes>
        </>
    );
}

export default App;
