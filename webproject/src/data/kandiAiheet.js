const kandiAiheet = [
    // Kyber
    {
        aihe: 'Zero Trust -arkkitehtuuri organisaation kyberturvallisuudessa',
        kategoria: 'Kyber'
    },
    {
        aihe: 'Ransomware-hyökkäysten torjuminen ja liiketoimintavaikutukset',
        kategoria: 'Kyber'
    },
    {
        aihe: 'IoT-laitteiden tietoturvariskit ja niiden hallinta',
        kategoria: 'Kyber'
    },
    {
        aihe: 'Tietoturvauhkien ennakointi tekoälyn avulla',
        kategoria: 'Kyber'
    },
    {
        aihe: 'TLS- ja SSL-protokollien merkitys verkkoturvallisuudessa',
        kategoria: 'Kyber'
    },
    {
        aihe: 'Kriittisen infrastruktuurin kyberturvallisuus',
        kategoria: 'Kyber'
    },
    {
        aihe: 'Data-analytiikka kyberturvallisuusriskien tunnistamisessa',
        kategoria: 'Kyber'
    },

    // Riskienhallinta
    {
        aihe: 'Riskienhallinta pilvipalveluiden käytössä',
        kategoria: 'Riskienhallinta'
    },
    {
        aihe: 'Sisäisten tietoturvauhkien hallinta',
        kategoria: 'Riskienhallinta'
    },
    {
        aihe: 'Kybervakuutukset: hyödyt ja haasteet organisaatioille',
        kategoria: 'Riskienhallinta'
    },
    {
        aihe: 'Liiketoiminnan jatkuvuussuunnittelu kyberhyökkäysten varalle',
        kategoria: 'Riskienhallinta'
    },
    {
        aihe: 'Sosiaalisen manipuloinnin riskien hallinta',
        kategoria: 'Riskienhallinta'
    },
    {
        aihe: 'Disaster Recovery Plan -suunnitelmat IT-ympäristöissä',
        kategoria: 'Riskienhallinta'
    },
    {
        aihe: 'Riskienhallinta ohjelmistokehityksen elinkaarihallinnassa',
        kategoria: 'Riskienhallinta'
    },

    // Liiketoiminta
    {
        aihe: 'Tekoälyn rooli liiketoiminnan päätöksenteossa',
        kategoria: 'Liiketoiminta'
    },
    {
        aihe: 'Pilvipalveluiden kustannustehokkuus ja liiketoimintamallit',
        kategoria: 'Liiketoiminta'
    },
    {
        aihe: 'ERP-järjestelmien vaikutus liiketoimintaprosessien tehostamiseen',
        kategoria: 'Liiketoiminta'
    },
    {
        aihe: 'CRM-järjestelmät ja asiakasdatan hallinta liiketoiminnassa',
        kategoria: 'Liiketoiminta'
    },
    {
        aihe: 'Blockchainin mahdollisuudet liiketoiminnassa',
        kategoria: 'Liiketoiminta'
    },
    {
        aihe: 'Virtuaalitodellisuuden käyttö liiketoiminnassa',
        kategoria: 'Liiketoiminta'
    },
    {
        aihe: 'Big Datan vaikutus liiketoiminnan päätöksentekoon',
        kategoria: 'Liiketoiminta'
    },

    // IT-kontrollit
    {
        aihe: 'Operationaaliset IT-kontrollit yrityksissä',
        kategoria: 'IT-kontrollit'
    },
    {
        aihe: 'SDLC-prosessit ja niiden tietoturvallisuus',
        kategoria: 'IT-kontrollit'
    },
    {
        aihe: 'Tietojenkalastelun torjunta IT-kontrollien avulla',
        kategoria: 'IT-kontrollit'
    },
    {
        aihe: 'Käyttäjävaltuuksien hallinta ja valvonta',
        kategoria: 'IT-kontrollit'
    },
    {
        aihe: 'Käyttöoikeuksien hallinta yrityksissä',
        kategoria: 'IT-kontrollit'
    },
    {
        aihe: 'Tietoturvakontrollien auditointi',
        kategoria: 'IT-kontrollit'
    },
    {
        aihe: 'Tietoturvapolitiikan merkitys IT-kontrollien vahvistamisessa',
        kategoria: 'IT-kontrollit'
    },

    // Tietoturva-asetukset
    {
        aihe: 'Nis2-direktiivin vaikutukset organisaatioille',
        kategoria: 'Tietoturva-asetukset'
    },
    {
        aihe: 'GDPR ja sen vaikutukset ohjelmistokehitykseen',
        kategoria: 'Tietoturva-asetukset'
    },
    {
        aihe: 'CERT-organisaation rooli kyberturvallisuudessa',
        kategoria: 'Tietoturva-asetukset'
    },
    {
        aihe: 'Tietojen anonymisointi ja pseudonymisointi GDPR:n kannalta',
        kategoria: 'Tietoturva-asetukset'
    },
    {
        aihe: 'Kyberturvallisuusvaatimukset finanssialalla',
        kategoria: 'Tietoturva-asetukset'
    },
    {
        aihe: 'Tietoturvastandardien noudattaminen ohjelmistokehityksessä',
        kategoria: 'Tietoturva-asetukset'
    },
    {
        aihe: 'Henkilötietojen käsittely ja tietosuojaperiaatteet',
        kategoria: 'Tietoturva-asetukset'
    },

    // Projektinhallinta
    {
        aihe: 'RACI-taulukon käyttö IT-projektien hallinnassa',
        kategoria: 'Projektinhallinta'
    },
    {
        aihe: 'Riskienhallinta IT-projektien suunnittelussa',
        kategoria: 'Projektinhallinta'
    },
    {
        aihe: 'Agile-metodologian vaikutus projektien riskienhallintaan',
        kategoria: 'Projektinhallinta'
    },
    {
        aihe: 'DevSecOps: turvallisuuden integrointi kehitysputkeen',
        kategoria: 'Projektinhallinta'
    },
    {
        aihe: 'Projektin aikataulutuksen haasteet IT-alalla',
        kategoria: 'Projektinhallinta'
    },
    {
        aihe: 'Ketterien menetelmien käyttö ohjelmistoprojektien hallinnassa',
        kategoria: 'Projektinhallinta'
    },
    {
        aihe: 'Projektinhallintatyökalujen vertailu IT-projekteissa',
        kategoria: 'Projektinhallinta'
    }
];

export default kandiAiheet;
