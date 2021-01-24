import React from 'react';
import { MainContent } from './mainContent';
import { Header } from './header';

export function Layout() {
    return (
        <React.Fragment>
            <Header/>
            <MainContent/>
        </React.Fragment>
    );
} 