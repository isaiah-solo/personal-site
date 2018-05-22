import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from './../../src/containers/App';

const path = require('path');
const fs = require('fs');

export default (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf-8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const context = {};

    const html = ReactDOMServer.renderToString(
      <StaticRouter
          context={ context }>
        <App />
      </StaticRouter>
    );

    const updatedHtml = htmlData.replace(
      '<div id="root"></div>',
      '<div id="root">' + html + '</div>'
    );

    console.log(typeof(updatedHtml));

    return res.send(updatedHtml);
  })
};

