import debounce from 'debounce';

import deleteIcon from '@/assets/close.svg';
import './search.scss';

interface SearchProps {
    onSearch: (query: string) => void;
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, selectedCategory, setSelectedCategory }) => {
    const debouncedSearch = debounce(onSearch, 500);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    };

    const handleCategoryClear = () => {
        setSelectedCategory(null);
    };

    return (
        <div className='search'>
            <input
                name='query'
                onChange={handleChange}
                className='search__input'
                placeholder='Search'
            />
            {selectedCategory && (
                <div className='search__category'>
                    <p>{selectedCategory}</p>
                    <img
                        src={deleteIcon}
                        alt='Delete category search'
                        onClick={handleCategoryClear}
                    />
                </div>
            )}
        </div>
    );
};

export default Search;
