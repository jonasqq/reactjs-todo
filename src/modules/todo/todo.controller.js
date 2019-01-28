const React = require('react');
const { ReactDOMServer } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const TODO = require('../../components/todo.component');

module.exports = {
  get: (req, res) => {
    const sheet = new ServerStyleSheet();
    const body = ReactDOMServer.renderToString(sheet.collectStyles(React.createElement(TODO)));
    const styles = sheet.getStyleTags();
    res.render('../views/todo.ejs', {
      body,
      styles,
    });
  },
};
