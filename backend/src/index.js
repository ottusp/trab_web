const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.use('/api/static', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use('/api', routes);

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})