import React from 'react';
import background from '../assets/images/header-background.jpg'

export function Header() {
    const headerStyle = {
        backgroundColor: "rgba(75, 184, 210, 0.5)",
        backgroundSize: "100%",
        height: "1080px",
        width: "100%",
        position: "fixed",
        zIndex: "1",
    };

    const mainTitleStyle = {
        color: "#fff",
        fontSize: "7em",
        fontWeight: "300",

        textAlign: "center",
        alignItems: "flex-end",
        display: "flex",
    }; 

    const subTitleStyle = {
        color: "#363636",
        fontSize: "2em",
        fontWeight: "bold",

        alignItems: "flex-start",
        display: "flex",
    }; 

    return (
        <header id="header" style={headerStyle}>
            <div className="container h-100">
                <div className="row h-50">
                    <div className="col-sm-12 justify-content-center" style={mainTitleStyle}>
                        <div>Full Stack Developer</div>
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