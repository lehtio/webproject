import React, { useState } from 'react';
import kandiAiheet from '../data/kandiAiheet';
import '../styles/kandi.css'; 

const Kandi = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Hakusana
    const [category, setCategory] = useState(''); // Valittu kategoria

    // Haetaan kaikki kategoriat 
    const categories = [...new Set(kandiAiheet.map(aihe => aihe.kategoria))];

    // Suodatetaan aiheet hakusanan ja kategorian mukaan listaksi :)
    const filteredAiheet = kandiAiheet.filter(aihe => {
        const matchesCategory = category ? aihe.kategoria === category : true;
        const matchesSearch = aihe.aihe.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container">
            <h2 className="title">Vinkkejä kandia kirjoittaville</h2>
            <h3 className="subtitle">Aiheideoita</h3>
            <p className="description"> Täältä voit etsiä itsellesi kandiaihetta tai edes ajatusta siitä, minkä tyyppisestä aiheesta voisit kirjoittaa.
            </p>

            {/* Hakukenttä ja kategoriavalinta */}
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Kukkuu<3 Kirjota tähän jotain kivaa <3" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="search-input"
                />
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className="category-select"
                >
                    <option value="">Kaikki kategoriat</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* Suodatetut aiheet, tuo kandiaihelsitaus tullaan joskus viemään tietokantaan */}
            <ul className="results-list">
                {filteredAiheet.map((aihe, index) => (
                    <li key={index} className="result-item">
                        {aihe.aihe} - <em>{aihe.kategoria}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Kandi;
