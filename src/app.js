const express = require('express');
const router = require('./routers');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(router.loginRouter);
app.use(router.userRouter);
app.use(router.categoryRouter);
app.use(router.postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
