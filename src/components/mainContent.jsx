import React from 'react';
import { ProjectItem } from './projectItem';

export function MainContent() {
    return (
        <div className="main-content">
            <div className="container h-50">
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
        </div>
    );
}