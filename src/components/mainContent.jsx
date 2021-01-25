import React from 'react';
import { ProjectItem } from './projectItem';
import { projectsData } from '../constants/projectsData';

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
                    {projectsData.map((el, index) => <ProjectItem title={el.title} description={el.description} imageClass={el.imageClass}/>)}
                </div>
            </div>
            <div className="container-fluid" style={{height: "40%"}}>
                <div className="row" style={{height: "70vh"}}>
                    <div className="col-sm-6 w-50 h-100 main-content-img">
                    </div>
                    <div className="col-sm-6 w-50 h-100 " style={{backgroundColor: "#f5f4f4", padding: "0px 6% 0 6%"}}>
                        <div className="row h-50 py-3 d-flex align-items-end" style={{textAlign: "left"}}>
                            <span className="col-12 py-1 d-flex main-content-text-title">
                                Hello! 
                                I'm Egor Borisenko.
                            </span>
                        </div>
                        <div className="row h-50 py-3 d-flex align-items-start" style={{textAlign: "left"}}>
                            <span className="col-12 h-50 py-1 d-flex main-content-text">
                                Web services, that allows users to view and manipulate with different data coming from IoT things,
                                create statistics automation for users IoT zones.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}