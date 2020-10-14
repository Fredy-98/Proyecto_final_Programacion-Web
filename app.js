const express = require('express'); 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('Hola este es un ejemplo de servicio con API'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 
process.env.RUNKIT_ENDPOINT_URL;