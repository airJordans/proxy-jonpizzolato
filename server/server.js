const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/listings/:listingId', express.static(path.join(__dirname, '/../public')));

// booking module
app.get('/listings/:listingId/booking*', (req, res) => {
    res.redirect(`http://ec2-54-183-255-196.us-west-1.compute.amazonaws.com${req.url}`);
});

// description module
app.get('/listings/:listingId/overview', (req, res) => {
  res.redirect(`http://awslistingmodule-env.x9r2zr55dh.us-west-2.elasticbeanstalk.com${req.url}`);
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  res.redirect(`http://awslistingmodule-env.x9r2zr55dh.us-west-2.elasticbeanstalk.com${req.url}`);
});

// review module
app.get('/listings/:listingId/overviews', (req, res) => {
    res.redirect(`http://localhost:3003${req.url}`);
});

app.get('/listings/:listingId/reviews', (req, res) => {
    res.redirect(`http://localhost:3003${req.url}`);
});

// image carousel
app.get('/listings/:listingId', (req, res) => {
    res.redirect(`http://localhost:3004${req.url}`);
});
  
app.get('/listings/:listingId/pictures', (req, res) => {
  res.redirect(`http://localhost:3004${req.url}`);
});

module.exports = app;
