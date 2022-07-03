import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import DataAccessModel from './src/data-access.model.js'

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/list', (req, res) => {
  console.log('listing', req.query.table )
  let registers = DataAccessModel.list(req.query.table)
  res.send(registers);
});

app.get('/find', (req, res) => {
  console.log('finding', req.query.table)
  let register = DataAccessModel.find(req.query.table, req.query.id)
  res.send(register);
});

app.get('/findByField', (req, res) => {
  console.log('finding by field', req.query.table)
  let register = DataAccessModel.findByField(req.query.table, req.query.field, req.query.value)
  res.send(register);
});

app.post('/create', (req, res) => {
  let register = DataAccessModel.create(req.body.table, req.body.params)
  res.send(register);
});

app.delete('/delete', (req, res) => {
  let register = DataAccessModel.delete(req.body.table, req.body.id)
  res.send(register);
});

app.put('/update', (req, res) => {
  let register = DataAccessModel.update(req.body.table, req.body.id, req.body.params)
  res.send(register);
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
