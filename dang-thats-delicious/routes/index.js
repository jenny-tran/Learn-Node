const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
    const jenny = { name: 'Jenny', age: 100, cool: true };
    // res.send('Hey! It works!');

    // http://localhost:7777/?name=jenny&age=100
    // res.json(req.query); // Query parameters

    // for localhost:7777/?dog=hugo
    res.render('hello', {
        name: 'Jenny',
        dog: req.query.dog
    });
});

router.get('/reverse/:name', (req, res) => {


    // When visiting this url: http://localhost:7777/reverse/jenny
    // name = req.params.name
    const reverse = [...req.params.name].reverse().join('');

    res.send(reverse);
})

module.exports = router;
