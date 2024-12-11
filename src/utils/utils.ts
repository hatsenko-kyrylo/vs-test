import { IMeal } from '@/types';

export const formatedTags = (tags: string) => {
    if (tags) {
        return tags
            .split(',')
            .map((tag) => `#${tag}`)
            .join(' ');
    } else {
        return null;
    }
};

export const filterMealsByCategory = (meals: IMeal[], category: string | null): IMeal[] => {
    if (!category) return meals;
    return meals.filter((meal) => meal.strCategory === category);
};

export const paginateMeals = (meals: IMeal[], page: number, itemsPerPage: number): IMeal[] => {
    const startIndex = (page - 1) * itemsPerPage;
    return meals.slice(startIndex, startIndex + itemsPerPage);
};

export const generatePages = (totalPages: number, currentPage: number) => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push('...');

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) pages.push(i);
        if (currentPage < totalPages - 3) pages.push('...');
        pages.push(totalPages);
    }

    return pages;
};
