import React from 'react';

export function Footer() {
    const footerStyle = {
        backgroundColor: "#fff",
        height: "1080px",
        width: "100%",
        fontFamily: "'Raleway', sans-serif",
        position: "relative",
        zIndex: "2",
    };

    const mainTitleStyle = {
        color: "#fff",
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
        <footer id="footer">
            <div className="container h-50">
                <div className="row h-50 justify-content-center">
                    <div className="col-sm-12">
                        <div>Full Stack Developer</div>
                    </div>
                </div>
                <div className="row h-50 justify-content-center">
                    <div className="col-sm-12">
                        <div>Jack of all trades in: C#/.NetCore/JS/React since 2017</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}