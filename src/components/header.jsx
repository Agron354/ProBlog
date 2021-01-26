import React from 'react';

export function Header() {
    return (
        <header>
            <div className='container-fluid'>
                <div className='row h-50'>
                    <div className='col-sm-12 justify-content-center title first-screen-title-main'>
                        <div>Full Stack Developer.</div>
                    </div>
                </div>
                <div className='row h-50'>
                    <div className='col-sm-12 justify-content-center title first-screen-title-sub'>
                        <div>JACK OF ALL TRADES IN C#/.NETCORE/JS/REACT</div>
                    </div>
                </div>
            </div>
        </header>
    );
}