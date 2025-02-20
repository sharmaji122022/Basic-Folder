const  express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouters = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

app.use('/', indexRouters);
app.use('/users',userRoutes);
app.use('/posts', postRoutes);

module.exports = app;