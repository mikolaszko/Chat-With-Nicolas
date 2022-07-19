import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Messages from './database_schema/dbMessages.js';
import Cors from 'cors';
import Pusher from 'pusher';

//APP CONFIG

const app = express();
app.use(Cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;
const pusher = new Pusher({
  appId: '1438940',
  key: 'be99c78998a1b166be59',
  secret: '6ee85eab26dcfd420a7d',
  cluster: 'eu',
  useTLS: true,
});

//API Endpoints

const db = mongoose.connection;
db.once('open', () => {
  console.log('DB Connected');
  const msgCollection = db.collection('messages');
  const changeStream = msgCollection.watch();
  changeStream.on('change', (change) => {
    console.log(change);
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log('Error trigerring Pusher');
    }
  });
});

app.get('/', (req, res) => res.status(200).send('Hello Baboon'));

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

const connection_url = process.env.DB_URL;

mongoose
  .connect(connection_url)
  .then(() =>
    app.listen(PORT, '0.0.0.0', () =>
      console.log(`Server is running on Port ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
