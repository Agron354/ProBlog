import React from 'react';

export function Header() {
    return (
        <header>
            <div className='container-fluid justify-content-center'>
                <div className='row h-50'>
                    <div className='col justify-content-center title first-screen-title-main'>
                        Full Stack Developer.
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