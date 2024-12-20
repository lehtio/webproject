import React from 'react';
import Weather from '../components/Weather';

const Exchange = () => {
  return (
    <div className="exchange-container">
      <div className="sidebar">
        <Weather />
      </div>
      <div className="main-content">
        <h1>Vaihtoblogi</h1>
        <p>Hehei, täältä löytynee aikanaan vaihtosisältöä Itävallasta.</p>
        
        <p>Jos hyvin käy, tänne voisi lisätä myös muistilistan ja vinkit vaihtoon lähtevälle</p>
        <p>Opintosivuilta löytyy myös vaihtoehtoinen opintosuunnitelma, josta voi olla iloa sikäli mikäli mietit vaihtoon
          lähtöä ja haluat valmistua kandiksi 3 vuodessa.
        </p>
      </div>
    </div>
  );
};

export default Exchange;
