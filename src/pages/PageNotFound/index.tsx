import { useNavigate } from 'react-router-dom';
import './pageNotFound.scss';

interface IPageNotFoundProps {
    text: string;
}

const PageNotFound = ({ text }: IPageNotFoundProps) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='page-not-found glassmorphism'>
                <h1 className='page-not-found__header'>{text}</h1>
                <button className='page-not-found__btn' onClick={() => navigate('/')}>
                    Back to Main Page
                </button>
            </div>
            <div className='background-image'></div>
        </>
    );
};

export default PageNotFound;
