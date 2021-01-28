import React, { useState } from 'react';

export function ProjectItem(props) {
    const [descriptionIsVisible, setDescriptionVisibility] = useState(false);

    return (
        <div 
            className={`col-5 col-xs-12 m-2 project-img justify-content-center ${props.imageClass}${descriptionIsVisible ? '-description' : ''}`}
            onMouseOver={() => setDescriptionVisibility(true)} 
            onMouseLeave={() => setDescriptionVisibility(false)}>
            <div className='d-none container'>
                <div className='row'>
                    <span className='col-12 py-1 d-flex justify-content-center align-items-end font-weight-bold'>{props.title}</span>
                    <span className='col-12 py-1 d-flex justify-content-center'>{props.description}</span>
                </div>
            </div>
        </div>
    );
}