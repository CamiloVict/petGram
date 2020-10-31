import React from 'react';
import {CategoryList} from './components/ListOfCategories/index';
import {GlobalStyle} from './components/styles/globalStyles';
import {PhotoCardList} from './components/ListOfPhotoCards/index';
import {Logo} from './components/Logo/index';

export const App = () => (
    
        <div>
            <GlobalStyle/>
            <Logo/>
            <CategoryList />
            <PhotoCardList />
        </div>
)

