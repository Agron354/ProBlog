import React from 'react';

export function Footer() {
    const footerStyle = {
        backgroundColor: "#fff",
        height: "100vh",
        width: "100%",
        fontFamily: "'Raleway', sans-serif",
        position: "relative",
        zIndex: "2",
        boxShadow: "white 0px 0px 11px",
        marginTop: "100vh",
    };

    const mainTitleStyle = {
        color: "#363636",
        fontSize: "7em",
        fontWeight: "bold",
        lineHeight: "0.8rem",

        textAlign: "center",
        alignItems: "center",
        display: "flex",
    }; 

    const subTitleStyle = {
        color: "#363636",
        fontSize: "2em",
        fontWeight: "bold",
        lineHeight: "0.8rem",

        textAlign: "center",
        alignItems: "center",
        display: "flex",
    }; 

    return (
        <footer id="footer" style={footerStyle}>
            <div className="container h-50">
                <div className="row h-50 justify-content-center" style={mainTitleStyle}>
                    <div className="col-sm-12">
                        <div>Full Stack Developer</div>
                    </div>
                </div>
                <div className="row h-50 justify-content-center" style={subTitleStyle}>
                    <div className="col-sm-12">
                        <div>Jack of all trades in: C#/.NetCore/JS/React since 2017</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}