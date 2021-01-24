import React, { useState } from 'react';

export function ProjectItem() {
    const [descriptionIsVisible, setDescriptionVisibility] = useState(false);

    return (
        <div 
            className={`col-5 m-3 project-img justify-content-center ${descriptionIsVisible ? "description-background" : ""}`}
            onMouseOver={() => setDescriptionVisibility(true)} 
            onMouseLeave={() => setDescriptionVisibility(false)}>
            <div className="hidden">
                <span>Smart IoT management</span>
                <span>
                    Web services, that allows users to view and manipulate with different data coming from IoT things,
                    create statistics automation for users IoT zones and things, 
                    comparing of input and output parameters of IoT things.
                </span>
            </div>
        </div>
    );
}