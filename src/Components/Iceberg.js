import React from 'react'

export const Iceberg = () => {
    const style = {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '20px',
        padding: '20px',
        background: 'rgb(204, 204, 255)', // change to lilac
        minHeight: '100%'
    };
    return (
        <main style={style}>
            
            <a href="/" >Back</a>
            <h2> Freud's Iceberg Analogy</h2>
           
            <p>This demonstrates Freuds concept of Personality.</p>
            <img src={require('../../src/Images/personality.jpg')} />
            <p></p>
        </main>
    );
};
/*<img src={require('../../src/Images/freud_iceberg.jpg')} />*/