import React from 'react';
import kandiLinkit from '../data/kandiLinkit'; // tuo kandiLinkit-tiedosto

const Kandi = () => {
    return (
        <div>
            <h2>Vinkkejä kandia kirjoittaville</h2>
            <h3>Aiheideoita</h3>
            <p> Nämä tullaan varmaan ajamaan tietokantaan ja sivulle tullaan lisäämään hakukenttä, jolla 
                aiheita voi selata. Aiheet tullaan jakamaan aihepiirien mukaan tägeillä kuten "cyber", "management" jne.
            </p>
            
            <h3>Lähdetietokantoja (linkit vie JYU portaaliin) </h3>
            <ul>
                {kandiLinkit.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </a>
                      
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Kandi;
