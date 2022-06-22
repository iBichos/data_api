import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import DataAccessModel from './src/data-access.model.js'

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/products', (req, res) => {
  let products = DataAccessModel.list('products')
  res.send(products);
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
