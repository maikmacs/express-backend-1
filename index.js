import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI =
  process.env.MONGODB_URI ||
  'mongodb://db_admin:AdminAirBnb1234!@ds115022.mlab.com:15022/airbnb-clon';

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', () => console.log('Error al conectar a la BD')).once(
  'open',
  () => console.log('Conectado a la BD')
);

app.use(parser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server on');
});

app.listen(3000, () => console.log('Server on 3000'));
