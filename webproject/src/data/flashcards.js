// nämä voisi siirtää tietokantaan
const flashcards = [
    {
      term: 'Olio',
      definition: 'Olio on yksittäinen toimija ohjelmassa, joka sisältää toimintansa toteuttamiseen ja ohjaamiseen tarvitsemansa tiedot. Sillä on käytös, tila ja identiteetti. Oliot ovat tilallisia, mutta niiden tila on piilotettuna olion sisälle.'
    },
    {
      term: 'Luokka',
      definition: 'luokka on olio joka sisältää jonkin toisen olion rakenteen kuvauksen, ja osaa luoda sisältämänsä kuvauksen mukaisia olioita. Luokka kuvaa usean identiteetiltään ja attribuuttiensa arvoilta eriävän olion samanlaisen rakenteen',
    },
    {
      term: 'Perintä',
      definition: 'Perintä on luokassa määritellyn tyypin, rakenteen ja käytöksen uudelleenkäyttmistä toisen luokan määrittelemiseen. Perivästä luokasta perittyyn luokkaan vaikuttaa yleistyssuhde (generalization). Sama suhde on toisinpäin erikoistamissuhde (specialization)',
    }
    ,
    {
      term: 'Kapselointi',
      definition: 'Kapselointi kokoaa yhteen tiedon ja sitä käsittelevät metodit. Kapselointi pyritään tekemään niin, että mukana on vain tarvittava tieto ja tarvittavat metodit, ei liian vähän, eikä liikaa',
    },
    {
      term: 'Tiedon piilotus',
      definition: 'Piilotus aiheuttaa sen, etteivät attribuutit näy oliosta ulospäin, eli olion tilaan pääsee käsiksi vain olion metodien kautta. Vain metodit voivat lukea ja kirjoittaa attribuuttien arvoja. Olion tilaa ei pääse katsomaan tai muokkaamaan muutoin kuin metodien avulla',
    },
    {
      term: 'Metodi',
      definition: 'On nimetty toimintaohje joka suoritetaan viestin vastaanottajassa. Kertoo miten asia tehdään',
    },
    {
      term: 'Attribuutti',
      definition: 'Ovat luokan rakenteellisia tunnusmerkkejä ja saavat olioissa omat arvonsa',
    },
    {
        term: 'Rajapinta',
        definition: 'Rajapinta määrittelee joukon yhteenkuuluvia metodeja ja niiden kutsumuodot, mutta ei niiden toteutusta. Rajapinta voi periä useita ylirajapintoja. Luokka voi toteuttaa yhden tai useamman rajapinnan.'
    }
  ];
  
  export default flashcards;
  