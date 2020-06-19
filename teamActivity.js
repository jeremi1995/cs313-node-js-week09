const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); //to anable req.body

//view
app.set("views", "views");
app.set("view engine", "ejs");

//control
app.get('/', (req, res) => {
    console.log('received request for ' + req.url);
    res.send('Team Activity!');
});

app.post('/math', (req, res) => {
    console.log('received request for ' + req.url);
    const num = add2Nums(req);

    let param = {addResult: num};

    res.render("partials/addResultDisplay", param);
});

app.post('/math_service', (req, res) => {
    console.log('received request for ' + req.url);
    const num = add2Nums(req);

    let param = {addResult: num};

    res.render("partials/addResultJSON", param);
});

app.listen(port, () => console.log(`Example app listening at port: ${port}`));

//model
function add2Nums(req) {
    return Number(req.body.n1) + Number(req.body.n2);
}