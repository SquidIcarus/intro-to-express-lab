const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Express server online</h1>'
    )
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

/************************** EX. 1 ******************************/
app.get('/greetings/:name', (req, res) => {
    console.log(req.params.name);

    res.send(`<h1>Hey ${req.params.name}, fancy seeing you here!`);
});

/************************** EX. 2 ******************************/

app.get('/roll/:diceNumber', (req, res) => {
    console.log(req.params.diceNumber);
    const diceNumber = req.params.diceNumber;
    if (isNaN(diceNumber)) {
        res.send(`<h1>You must specify a number, "${req.params.diceNumber}" is not a valid number!`);
    } else {
        res.send(`<h1>You rolled a ${req.params.diceNumber}`);
    }
});

/************************** EX. 3 ******************************/

app.get('/collectibles/:indexNumber', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];

    const index = parseInt(req.params.indexNumber);

    if (isNaN(index) || index < 0 || index >= collectibles.length) {
        return res.send(`This item is not yet in stock. Check back soon!`);
    }

    const item = collectibles[index];

    res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`);
});

/************************** EX. 4 ******************************/

app.get('/shoes', (req, res) => {
      const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  let filteredShoes = shoes;

  const minPrice = Number(req.query['min-price']);
  const maxPrice = Number(req.query['max-price']);
  const type = req.query.type;

  if (!isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  }

  if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
  }

  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
  }

  res.send(filteredShoes);

});