const ejs = require('ejs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const { Provider } = require('react-redux');

const viewPath = path.resolve(__dirname, '../../views');
function renderReact(view, el, store) {
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(React.createElement(
      Provider,
      { store },
      React.createElement(el),
    )),
  );
  const styles = sheet.getStyleTags();
  const state = `
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = '${JSON.stringify(store.getState())}'.replace(/</g, '\\u003c');
    </script>
  `;
  ejs.renderFile(`${viewPath}/${view}.ejs`, {
    styles,
    body,
    state,
  }, (err, html) => {
    if (err) throw err;
    this.send(html);
  });
}
module.exports = renderReact;
