import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage  = () => {
    // console.log(history);
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    );
}

export default HomePage;