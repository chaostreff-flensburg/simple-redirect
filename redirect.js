const app = require('express')();

app.get('/{*splat}', (req, res) => {
  res.redirect(301, `${process.env.REDIRECT_URL}${req.originalUrl}`);
});
app.listen(3000);