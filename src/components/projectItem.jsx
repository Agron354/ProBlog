import React, { useState } from 'react';

export function ProjectItem() {
    const [descriptionIsVisible, setDescriptionVisibility] = useState(false);

    return (
        <div 
            className={`col-5 col-xs-12 m-2 project-img justify-content-center ${descriptionIsVisible ? "description-background" : "description-background-invisible"}`}
            onMouseOver={() => setDescriptionVisibility(true)} 
            onMouseLeave={() => setDescriptionVisibility(false)}>
            <div className="hidden container">
                <div className="row">
                    <span className="col-12 py-1 d-flex justify-content-center align-items-end">Smart IoT management</span>
                    <span className="col-12 py-1 d-flex justify-content-center">
                        Web services, that allows users to view and manipulate with different data coming from IoT things,
                        create statistics automation for users IoT zones and things, 
                        comparing of input and output parameters of IoT things.
                    </span>
                </div>
            </div>
        </div>
    );
}