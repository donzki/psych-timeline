import React from 'react'

export const Titch = () => {
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
            <h2>Welcome to the App</h2>
          
            <p>This is a simple React page example.</p>
           <img src={require('../../src/Images/Titchener.jpg')} />
            <p></p>
        </main>
    );
};
