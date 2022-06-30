import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import DataAccessModel from './src/data-access.model.js'

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/list', (req, res) => {
  let products = DataAccessModel.list(req.body.table)
  res.send(products);
});

app.get('/find', (req, res) => {
  let products = DataAccessModel.find(req.body.table, req.body.id)
  res.send(products);
});

app.get('/findByField', (req, res) => {
  let register = DataAccessModel.findByField(req.body.table, req.body.field, req.body.value)
  res.send(register);
});

// app.post('/create', (req, res) => {
//   let products = DataAccessModel.create(req.body.table)
//   res.send(products);
// });

// app.delete('/delete', (req, res) => {
//   let products = DataAccessModel.delete(req.body.table)
//   res.send(products);
// });

// app.patch('/update', (req, res) => {
//   let products = DataAccessModel.update(req.body.table)
//   res.send(products);
// });







// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
