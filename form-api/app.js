const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { google } = require('googleapis');
const keys = require('./key.json');
const path = require('path');
const { authenticate } = require('@google-cloud/local-auth');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


const {google} = require('googleapis');
const keys = require('./key.json');

app.get('/sheets', async (req, res) => {
  const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key, 
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  client.authorize(function(err, tokens) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Connected!');
      gsrun(client);
    }
  });

  const forms = google.forms({ version: 'v1', auth });

  const formUrls = [
    'https://docs.google.com/forms/d/197XW6Wq5ZvxT-9abFD-W2kp9Nndk6_IMBeyRzQ1sFwk/edit#responses',
    'https://docs.google.com/forms/d/1d0qh9bBoEjUhEb7Xhf9eJa3NMXpZkVXNhdmFgine7_0/edit#responses',
    'https://docs.google.com/forms/d/1d0qh9bBoEjUhEb7Xhf9eJa3NMXpZkVXNhdmFgine7_0/edit#responses',
    'https://docs.google.com/spreadsheets/d/1M65zkQ-KDeiyWx5LZUfjjQ1hN83fi3g4mjzqxpWXNG0/edit?resourcekey#gid=946570321',
    'https://docs.google.com/forms/d/e/1FAIpQLSdUfh5IYOW8x42VnNDLwx-kwGutigCzfv5yyeDpk5FhKuSDBw/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSc8k-w12pdoIMDMVK4iu6bKeqQ20KTrRpZ9PkoCB1WkNycRfw/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSc9CCDXLDcV5F6nZOMuvi50UfrlsiVvCnwE-pfZvNppIhD5VQ/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSdMBu04oDi9KjihJyL6hXgGH6moVZc1EvHB9uIQhgAEW4nH0A/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLScFli22vWHAKvJPkw3wzzeMCl2rqo19gMFfM1wA5whU9l7sLA/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSeQ0vPirvdXNDwE7m4fWjMWpIN6cj7M-1oCbKMqh_eyI2j_Cg/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLScV-hPH-e-3npigwsD1NcqbsBKGMzg2zQfUgyyck3WOKvUYGA/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSe7ztbQDoTX4MYHePSgLbzdd3p-ANnbzZ1FYPubKvoESpfJCQ/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSfjrnkkRfutYxmZSRcDbiwpcX3TlqJ4-AiVv6O9FOODJVAgEA/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLScYkcayvppW4iQGQpX59Ajb0hT0BqfhN9deH_N-Gs5rYdOPpw/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSe98fEtojkLw5yD1pn0JNUO5Jql807xHQHsWSI438FFSk8Ldg/edit#responses',
    'https://docs.google.com/forms/d/e/1FAIpQLSfhA46fhwAdZiL9Bujz9Wx686wmLY_zls0y1u3DzWOXkxNz8Q/edit#responses',
  ];

  const formIds = formUrls.map(url => {
    const match = url.match(/\/d\/(.*?)\/edit/);
    return match ? match[1] : null;
  });

  let allData = [];

  for (let id of formIds) {
    const formRes = await forms.forms.get({ formId: id });
    allData.push(formRes.data);
  }

  res.send(allData);
});
