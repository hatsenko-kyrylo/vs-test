import './ingredientsList.scss';

interface IngredientsListProps {
    ingredients: string[];
    measures: string[];
    addStyles?: string;
}

const IngredientsList = ({ ingredients, measures, addStyles }: IngredientsListProps) => {
    return (
        <ul className={`meal__ingredients ${addStyles}`}>
            {ingredients.map((ingredient, i) => (
                <li className='meal__ingredients-item' key={i}>
                    <p>
                        {ingredient}:{' '}
                        <span className='meal__ingredients-item-measure'>
                            {measures[i] || 'N/A'}
                        </span>
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default IngredientsList;
