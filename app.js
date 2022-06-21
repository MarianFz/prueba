const express = require('express');
const res = require('express/lib/response');


const app = express(); 

const path = require('path'); 

//middelware

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//rutas: get, post, put, delete
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
/*app.listen(3001, () => {
    console.log('Servidor corriendo en puerto 3001');
})*/

app.set('puerto',process.env.PORT || 3000)



app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`))
