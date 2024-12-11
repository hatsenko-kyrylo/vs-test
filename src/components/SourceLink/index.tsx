import { Link } from 'react-router-dom';

import linkIcon from '@/assets/link.svg';
import './sourceLink.scss';

interface ISourceLink {
    strSource: string;
    title: string;
    notAvailableText: string;
}

const SourceLink = ({ strSource, notAvailableText, title }: ISourceLink) => {
    if (!strSource) return <p className='not-available'>{notAvailableText}</p>;

    return (
        <Link to={strSource} className='source-link'>
            <img src={linkIcon} alt='Source' />
            <p>{title}</p>
        </Link>
    );
};

export default SourceLink;
