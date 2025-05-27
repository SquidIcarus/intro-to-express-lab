const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Express server online</h1>'
    )
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/greetings/:name', (req, res) => {
    console.log(req.params.name);

    res.send(`<h1>Hey ${req.params.name}, fancy seeing you here!`);
});