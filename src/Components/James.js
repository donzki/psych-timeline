import React from 'react'
import pdf from '../../src/Docs/Anna O.pdf'
export const James = () => {
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
            <br></br>
           
            <h2>Welcome to the App</h2>
          
            <p>This is a simple React page example.</p>
            
 <a href={pdf} target='_blank'>Anna </a>
            <p></p>
        </main>
    );
};
