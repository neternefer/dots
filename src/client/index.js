//APOD
const apod = `https://api.nasa.gov/planetary/apod?api_key=CaT5kJt1LMYx8urEKXEXbKCWMG7seDViAQcwofcG`;
const fetch = require('node-fetch');
const getData = async (url) => {
    const response = await fetch(url);
    try {
        const data = response.json();
        return data
    } catch (e){
        console.log(e)
    }
}
const image = getData(apod);

document.querySelector('.container').innerHTML = image;