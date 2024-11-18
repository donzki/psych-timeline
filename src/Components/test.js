import React from 'react'

export const test = () => {
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
            <h2> Freud's Iceberg Analogy</h2>
           
            <p>This demonstrates Freuds concept of Personality.</p>
            <img src={require('../../src/Images/structuralism.jpg')} />
            <p></p>
        </main>
    );
};