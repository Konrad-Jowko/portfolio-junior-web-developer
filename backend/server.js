const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

/* ROUTES IMPORTS */
const pagesRoutes = require('./routes/pages.routes');

/* INITIALIZING EXPRESS */
const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

/* API ENDPOINTS */
app.use('/api', pagesRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect(`mongodb+srv://${process.env.login}:${process.env.password}@newwavedb.iibtz.mongodb.net/${process.env.database}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
});

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+ port);
});
