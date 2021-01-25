import React from 'react';
import { Header } from './header';
import { MainContent } from './mainContent';
import { Footer } from './footer';

export function Layout() {
    return (
        <React.Fragment>
            <Header/>
            <MainContent/>
            <Footer/>
        </React.Fragment>
    );
} 