import { Dispatch, SetStateAction } from 'react';
import { generatePages } from '@/utils/utils';
import './pagination.scss';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ totalPages, currentPage, setCurrentPage }: PaginationProps) => {
    return (
        <div className='pagination'>
            <button
                className='pagination__btn glassmorphism'
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                &lt;
            </button>
            {generatePages(totalPages, currentPage).map((page, i) =>
                typeof page === 'number' ? (
                    <button
                        key={i}
                        className={`pagination__btn glassmorphism ${page === currentPage ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={i} className='dots'>
                        {page}
                    </span>
                )
            )}
            <button
                className='pagination__btn glassmorphism'
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
