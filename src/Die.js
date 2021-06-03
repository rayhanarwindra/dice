import React from 'react';

function Die ({face, rolling}) {
    return (
        <i className={`die fas fa-dice-${face} ${rolling && 'shaking'}`}></i>
    )
}

export default Die;