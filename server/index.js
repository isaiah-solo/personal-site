import express from 'express';

import serverRenderer from './middleware/renderer';

const PORT = 8080;
const path = require('path');

const app = express();
const router = express.Router();

router.use(/*'^/$'*/'*', serverRenderer);

router.use(express.static(
  path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }
));

app.use(router);

app.listen(PORT, () => {
  console.log('Listening...');
});

