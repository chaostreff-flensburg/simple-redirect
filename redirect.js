const app = require('express')();

app.get('*', (req, res) => {
  res.redirect(301, `${process.env.REDIRECT_URL}${req.originalUrl}`);
});
app.listen(3000);