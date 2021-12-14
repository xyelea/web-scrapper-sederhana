const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
// call express as app
const app = express();
// url
const url = 'http://informatika.ft.unib.ac.id/';
// axios
axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];
        // console.log(html);
        $('.post-categories', html).each(function () {
            const title = $(this).text();
            const url = $(this).find('a').attr('href');
            articles.push({
                title,
                url
            })
        })
        console.log(articles);
    }).catch(err => console.log(err));
// checking...
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})