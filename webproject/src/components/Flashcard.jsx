import React from 'react';
import '../styles/Flashcard.css'; // Flashcardin tyylit

const Flashcard = ({ term, definition, showDefinition }) => {
  return (
    <div className="card">
      <div className="card-content">
       
        {showDefinition ? <p>{definition}</p> : <p>{term}</p>}
      </div>
    </div>
  );
};

export default Flashcard;
