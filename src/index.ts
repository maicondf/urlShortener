import express from 'express';
import { UrlController } from './controller/UrlController';
import { MongoConnection } from './database/MongoConnection';

const api = express();
api.use(express.json());

api.set('view engine', 'ejs');
api.set('views', './views');

const database = new MongoConnection();
database.connect();

const URLController = new UrlController();
api.post('/shorten', URLController.shorten);
api.get('/:hash', URLController.redirect);

api.listen(5000, () => console.log('Express Listening'));