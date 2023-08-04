const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

baseRouter.post('/add', async(req, res) => {

    const { first, second } = req.body;

  if (typeof first !== 'number' || typeof second !== 'number') {
    res.status(400).json({ error: 'Invalid numbers are provided' });
  } 

  else {
    const sum = first + second;
    res.json({ result: sum });
  }

});


baseRouter.post('/subtract', (req, res) => {
    
    const {first,second} = req.body;

    if(typeof first !== 'number' || typeof second !== 'number')
    {
        res.status(400).json(
            {
                error : 'Invalid numbers are provided'
            }
        )
    }

    else{
        const sub = first - second;
        res.json ({result : sub}) ;
    }
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});