import React, { useState } from 'react';
import Flashcard from '../components/Flashcard'; // Tuodaan Flashcard-komponentti
import flashcards from '../data/flashcards'; // Tuodaan flashcard-tiedot
import '../styles/Studies.css'; // Tyylit
import Mallipolku from '../components/Mallipolku'
import Fullstack from '../components/Fullstack'
import Kandi from '../components/Kandi';

const Studies = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  // Siirry seuraavaan korttiin
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
    setShowDefinition(false); // Palauta tila
  };

  // Siirry edelliseen korttiin
  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setShowDefinition(false); // Palauta tila
  };

  // Vaihda termin ja määritelmän välillä
  const handleFlip = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div className="flashcard-container">
      
      <h1>Ai sää tarttisit jotain opiskeluun liittyviä matskuja?</h1>
      <p>
        Lisäilen tänne opintoja helpottavia dokkareita ja muuta kivaa kunhan
        sivujen rakentaminen etenee. Ajatuksena on ainakin lisätä omasta kokemuksesta suositeltava opintojen rakenne tieto- ja ohjelmistotekniikan kandin tutkintoon.
      Sisällöt täytynee jaksottaa jotenkin järkevästi tänne, voi olla että esimerkiksi erillinen tietorakenne tai dropdown valikko voisi olla ihan fiksu idea.</p>
      
      Nämä varmaan joskus eriytetään omille sivuille / sivustolle täytynee laittaa oma navigointinsa
      <p>
        Linkistä pääset Quizletistä löytyvään Olio-ohjelmoinnin kurssin
        käsitteiden{' '}
        <a
          href="https://quizlet.com/fi/839131703/olio-ohjelmointi-flash-cards/?i=384x9n&x=1jqY"
          target="_blank"
          rel="noopener noreferrer"
        >
          flashcardeihin
        </a>
        . Käsitteet ja niiden pääritelmät perustuvat vuoden 2023 syksyn
        opetusmateriaaleihin. Alla myös ite tehty vastaava jos Quizlet ei
        nappaa.
      </p>


      
      <h2>Olio-ohjelmoinnin käsitteet</h2>
      <Flashcard
        term={flashcards[currentCardIndex].term}
        definition={flashcards[currentCardIndex].definition}
        showDefinition={showDefinition} // Tila kertoo näytetäänkö määritelmä vai termi
      />

      {/* Nappulat rivissä */}
      <div className="button-row"> 
        {/* Edellinen kortti */}
        <button onClick={handlePrevCard} className="prev-button">
          &#8592; Prev
        </button>

        {/* Flip-nappula: Vaihda termi/määritelmä */}
        <button onClick={handleFlip} className="flip-button">
          {showDefinition ? 'Show Term' : 'Show Definition'}
        </button>
        {/* Seuraava kortti */}
        <button onClick={handleNextCard} className="next-button">
          Next &#8594;
        </button>
      </div>
    
      <Kandi/>
      <Mallipolku />
      <Fullstack/>
    </div>
  );
};

export default Studies;
