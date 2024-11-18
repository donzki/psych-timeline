import React from 'react'

export const Wundt = () => {
    const style = {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '20px',
        padding: '20px',
        background: 'lightgray', // change to blue
        minHeight: '100%'
    };
    return (
        <main style={style}>
             <a href="/" >Back</a>
            <h2>Welcome to the App</h2>
          
            <p>This is a simple React page example.</p>
           <img src={require('../../src/Images/structuralism.jpg')} />
            <p></p>
        </main>
    );
};

/*<img src={require('../../src/Images/freud_iceberg.jpg')} />
<a href="https://www.britannica.com/biography/Edward-B-Titchener" target='_blank'> Edward Thorndike </a>*/