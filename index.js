const express = require('express');
const app = express();


app.get('/', (req, resp) => {
  resp.json([
    {
      id:1,
      name:'Bob'
    },
    {
      id:2,
      name:'James'
    }
  ]);
});

app.listen(3000, () => console.log("Express app is running on port 3000"));