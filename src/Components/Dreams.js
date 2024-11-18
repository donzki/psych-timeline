import React from 'react'

export const Dreams = () => {
    const style = {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '20px',
        padding: '20px',
        background: '#ccccff',
        minHeight: '100%'
    };
    return (
        <main style={style}>
            
            <a href="/" >Back</a>
            <h2> Freud's Dreams</h2>
           
            <p>This demonstrates Freuds concept of Personality.</p>
            <img src={require('../../src/Images/freud_iceberg.jpg')} />
            <p></p>
        </main>
    );
};
/*<img src={require('../../src/Images/freud_iceberg.jpg')} />*/