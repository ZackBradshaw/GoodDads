const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const {google} = require('googleapis');
const keys = require('./keys.json');

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

  const formUrls = [
  'https://docs.google.com/forms/d/e/1FAIpQLScvHlYAVEJ8C_Fez-uJfjEUd4mWiFEeXFZ0Xqhr23dqEU2AtA/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSfgaajToahtbTtIW7FGF6ZvW6lIxYZ2lFMel_oz-o1UCeizCw/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSdUfh5IYOW8x42VnNDLwx-kwGutigCzfv5yyeDpk5FhKuSDBw/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSc8k-w12pdoIMDMVK4iu6bKeqQ20KTrRpZ9PkoCB1WkNycRfw/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSc9CCDXLDcV5F6nZOMuvi50UfrlsiVvCnwE-pfZvNppIhD5VQ/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSdMBu04oDi9KjihJyL6hXgGH6moVZc1EvHB9uIQhgAEW4nH0A/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLScFli22vWHAKvJPkw3wzzeMCl2rqo19gMFfM1wA5whU9l7sLA/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSeQ0vPirvdXNDwE7m4fWjMWpIN6cj7M-1oCbKMqh_eyI2j_Cg/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLScV-hPH-e-3npigwsD1NcqbsBKGMzg2zQfUgyyck3WOKvUYGA/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSe7ztbQDoTX4MYHePSgLbzdd3p-ANnbzZ1FYPubKvoESpfJCQ/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSfjrnkkRfutYxmZSRcDbiwpcX3TlqJ4-AiVv6O9FOODJVAgEA/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLScYkcayvppW4iQGQpX59Ajb0hT0BqfhN9deH_N-Gs5rYdOPpw/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSe98fEtojkLw5yD1pn0JNUO5Jql807xHQHsWSI438FFSk8Ldg/viewform?usp=sf_link',
  'https://docs.google.com/forms/d/e/1FAIpQLSfhA46fhwAdZiL9Bujz9Wx686wmLY_zls0y1u3DzWOXkxNz8Q/viewform?usp=sf_link',
  ];

  const formIds = formUrls.map(url => url.split('/')[6]);

  async function gsrun(cl) {
    const gsapi = google.sheets({version: 'v4', auth: cl});
    
    let allData = [];
    
    for (let id of formIds) {
      const opt = {
        spreadsheetId: id,
        range: 'Form Responses 1!A2:B5'
      };
    
      let data = await gsapi.spreadsheets.values.get(opt);
      let dataArray = data.data.values;
      allData.push(dataArray);
    }
    
    console.log(allData);
    res.send(allData);
  }
});
