import React from 'react';
import background from '../assets/images/h5.jpg'

export function Header() {
    const headerStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: "rgba(50, 121, 141, 0.9)",
        backgroundSize: "100%",
        height: "1080px",
        width: "100%",
        position: "fixed",
        zIndex: "1",
        fontFamily: "'Raleway', sans-serif",
    };

    const mainTitleStyle = {
        color: "#fff",
        fontSize: "5.5em",
        fontWeight: "bold",

        textAlign: "center",
        alignItems: "flex-end",
        display: "flex",
    }; 

    const subTitleStyle = {
        color: "#fff",
        fontSize: "1.5em",
        fontWeight: "bold",

        alignItems: "flex-start",
        display: "flex",
    }; 

    return (
        <header id="header" style={headerStyle}>
            <div className="container h-100">
                <div className="row h-50">
                    <div className="col-sm-12 justify-content-center" style={mainTitleStyle}>
                        <div>Full Stack Developer.</div>
                    </div>
                </div>
                <div className="row h-50">
                    <div className="col-sm-12 justify-content-center" style={subTitleStyle}>
                        <div>JACK OF ALL TRADES IN C#/.NETCORE/JS/REACT</div>
                    </div>
                </div>
            </div>
        </header>
    );
}