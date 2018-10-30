import React from 'react';
import NavigationHOC from './NavigationHOC';
import BlueNavigationButton from './BlueNavigationButton';
import SecondaryNavigationButton from './SecondaryNavigationButton';

const NewPage = () => {
    const PrimaryNavButton = NavigationHOC(BlueNavigationButton);
    const SecondaryButton = NavigationHOC(SecondaryNavigationButton);
    return (
        <div>
            <h1>I AM ON A NEW PAGE</h1>
            <PrimaryNavButton />
            <SecondaryButton />
        </div>
    );
};

export default NewPage;