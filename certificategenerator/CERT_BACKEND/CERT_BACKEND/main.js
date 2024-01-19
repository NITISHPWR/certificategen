const express = require('express');
const app = express();
const connectDb = require('./config/dbConnection.js');
const port=3111;
const cors = require('cors');

connectDb();

app.use(express.json());
app.use(cors());

app.use('/templates',require('./routes/tempRoutes.js'));
app.use('/events',require('./routes/eventsRoutes'));
app.use('/single',require('./routes/tempGenRoutes'));
app.use('/bulk',require('./routes/tempBulkGenRoutes'));

app.use('/BlankCert',require('./routes/BlantCertRoutes.js'));

app.use('/BlankCertSingle',require('./routes/BlantCertGenRoutes.js'));
app.use('/BlankCertBulk',require('./routes/BlankCertBulkGenRoutes.js'));

app.listen(port, () => {
  console.log(`Server running @ ${port}`);
});
