import React from 'react'

export const Anna = () => {
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
            <h2>Anna O Case Study</h2>
          
            <p>This is a simple React page example.</p>
           <img src={require('../../src/Images/AnnaO.jpg')} />
            <p></p>
        </main>
    );
};

/*<img src={require('../../src/Images/freud_iceberg.jpg')} />
<a href="https://www.britannica.com/biography/Edward-B-Titchener" target='_blank'> Edward Thorndike </a>*/