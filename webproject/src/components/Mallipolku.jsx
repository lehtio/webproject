import React from 'react';
import '../styles/Mallipolku.css';

// saisikohan tästä taas tietokannan? Tähän tullaan väähntämään joku fiksumpi rakenne
const Mallipolku = () => {
  return (
    <div className="studies-container">
      <h2>Vaihtoehtoinen mallipolku tieto- ja ohjelmistotekniikan kandiin</h2>
      <p>Huomioithan että tämä ei ole yliopiston ohjeistama opintopolku, mutta omalla kokemuksella muotoiltu suositus. 
          Tätä saa hyödyntää tai olla hyödyntämättä. Sitten kun löydän aikaa, yritän kirjoitella jokaisesta kurssista pientä tiivistystä,
          mitä kurssiin on kuulunut ja oliko kurssi mielestäni työläs. 
      </p>
      <p>Jos aikaa ja intoa riittää, voisin tehdä myös vaihtoehtoisen mallipolun niille, jotka haluaisivat lähteä vaihtoon kandin tutkinnon 
        aikana, mutta jotka haluaisivat kuitenkin valmistua kandiksi aikataulussa.
      </p>
      <h3>Otathan huomioon, että kurssien järjestämisen ajankohta (periodi) voi muuttua. Lukuvuonna 23-24 ohjelmistotuotannon kurssi järjestettiin 
        4 periodissa, mutta lukuvuonna 24-25 kyseinen kurssi järjestetään 2 periodissa.
      </h3>
      
      <table className="study-plan">
        <thead>
          <tr>
            <th>1. vuosi, I. periodi</th>
            <th>1. vuosi, II. periodi</th>
            <th>1. vuosi, III. periodi</th>
            <th>1. vuosi, IV. periodi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              ITKY100 Yliopisto-opiskelu ja opintojen suunnittelu (2 op) <br />
              TIEP115 Johdatus tietotekniikkaan (3 op) <br />
              HYTP5000 Ihminen tietoyhteiskunnassa (5 op) <br />
              ITKP102 Ohjelmointi 1 (6 op) <br />
              ITKP1011 Web-julkaiseminen (2 op) <br />
              XYHI1030 Akateemiset tekstitaidot (2 op)*
            </td>
            <td>
              MATP1700 Tekniikan alan matematiikan valmistava kurssi (5 op) <br />
              TIEP114 Tietokoneen rakenne ja arkkitehtuuri (3 op) <br />
              ITKP102 Ohjelmointi 1 (6 op) <br />
              ITKP1011 Web-julkaiseminen (2 op) <br />
              XYHI1030 Akateemiset tekstitaidot (2 op)
            </td>
            <td>
              TEKY1110 Yritys ja toimintaympäristö (5 op) <br />
              MATA2700 Todistamisen ja päättelyn perusteet tekniikan alalle (5 op) <br />
              TIEP111 Ohjelmointi 2 (8 op)
            </td>
            <td>
              TJTA2020 Ihmisen ja tietokoneen vuorovaikutus (3 op) <br />
              MATA2600 Todennäköisyysmatematiikka (4 op) <br />
              TIEP111 Ohjelmointi 2 (8 op) <br />
              ITKP104 Tietoverkot (5 op) <br />
              XYHI1031 Akateeminen vuorovaikutus (2 op)
            </td>
          </tr>
          <tr>
            <th>2. vuosi, I. periodi</th>
            <th>2. vuosi, II. periodi</th>
            <th>2. vuosi, III. periodi</th>
            <th>2. vuosi, IV. periodi</th>
          </tr>
          <tr>
            <td>
              MATA2520 Joukkoteoria ja graafiteoria (5 op) <br />
              Toinen opintokokonaisuus (5 op) <br />
              Ohjelmistotekninen suunta: <br />
              TIEA1130 Olio-ohjelmointi ja suunnittelu (3 op)
            </td>
            <td>
              ITKA201 Algoritmit 1 (4 op) <br />
              Toinen opintokokonaisuus (5 op) <br />
              Ohjelmistotekninen suunta: <br />
              TIEA3810 Sovellettu predikaattilogiikka (5 op)
            </td>
            <td>
                ITKA2004 Tietokannat ja tiedonhallinta (5op) <br />
                Toinen opintokokonaisuus (5op) <br />
                XYHI2030 Monikielinen vuorovaikutus (3op) <br />
                Ohjelmistotekninen: TILP2400 Datan esittäminen ja analyssointi (5op) <br />
                Laskennallinen: TILP2600 Datasta malliksi (5op)

            </td>
            <td>
                Esimerkkikursseja kolmannen vuoden jatkoksi...</td>
          </tr>
          <tr>
            <th>3. vuosi, I. periodi</th>
            <th>3. vuosi, II. periodi</th>
            <th>3. vuosi, III. periodi</th>
            <th>3. vuosi, IV. periodi</th>
          </tr>
          <tr>
            <td>
              Täytä
            </td>
            <td>
              Täytä
            </td>
            <td>
                Täytä

            </td>
            <td>
                
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mallipolku;
