const keys = require('./../../config/keys');

module.exports = ({ body, id }) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following quesition:</p>
          <p>${body}</p>
          <div>
            <a href="${keys.redirectDomain}/user/surveys/${id}/yes">yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/user/surveys/${id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
