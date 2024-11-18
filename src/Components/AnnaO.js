import React from 'react'
export const AnnaO = () => {
    const style = {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '20px',
        padding: '20px',
        background: 'lightgray',
        minHeight: '100%'
    };
    return (
        <main style={style}>
            
        <a href="/" >Back</a>
        <h2> Freud's Iceberg Analogy</h2>
       
        <p>This demonstrates Freuds concept of Personality.</p>
        
        <img src={require('../../src/Images/AnnaO.jpg')} /><p></p>
    </main>
    );
};


/*<img src={require('../../src/Images/AnnaO.jpg')} />*/