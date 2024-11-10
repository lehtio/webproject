require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.json());

// Reitti säädatan hakemiseksi kaupungin nimellä tai koordinaateilla
app.get("/weather", async (req, res) => {
    const { city, lat, lon } = req.query;
    const apiKey = process.env.WEATHER_API_KEY;

    // Valitse oikea URL perustuen syötteeseen
    let url;
    if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else {
        return res.status(400).json({ message: "City or coordinates (lat, lon) are required" });
    }

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching weather data" });
    }
});

// Käynnistä palvelin
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// sään voi kurkata toimivaksi esim: http://localhost:3000/weather?city=Helsinki Helsingin osalta