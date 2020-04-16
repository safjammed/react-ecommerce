import React from 'react';
import Directory from '../../components/directory/directory.component';
import {HomePageContainer} from './homepage.styles';
const HomePage  = () => {
    // console.log(history);
    return (
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>        
    );
}

export default HomePage;