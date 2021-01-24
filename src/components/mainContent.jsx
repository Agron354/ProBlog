import React from 'react';
import { ProjectItem } from './projectItem';

export function MainContent() {
    return (
        <div className="main-content">
            <div className="container" style={{height: "60%"}}>
                <div className="row justify-content-center title second-screen-title-main">
                    <div className="col-sm-12">
                        <div>My commercial projects</div>
                    </div>
                </div>
                <div className="row justify-content-center" style={{height: "50vh"}}>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
            <div className="container-fluid" style={{height: "40%"}}>
                <div className="row justify-content-center" style={{height: "70vh"}}>
                    <div className="col-sm-6 w-50 h-100 main-content-img">
                    </div>
                    <div className="col-sm-6 w-50 h-100" style={{backgroundColor: "#f5f4f4"}}>
                    </div>
                </div>
            </div>
        </div>
    );
}