import { useNavigate } from 'react-router-dom';

import arrowBackIcon from '@/assets/arrow-back.svg';
import './backButton.scss';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button className='back-button glassmorphism' onClick={() => navigate('/')}>
            <img src={arrowBackIcon} alt='Back to main page' />
        </button>
    );
};

export default BackButton;
