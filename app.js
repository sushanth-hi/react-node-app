const express = require('express');
const app = express();
var path = require('path');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors')

const port = process.env.PORT || 5000;
app.use(cors())
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}


app.use('/api', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
