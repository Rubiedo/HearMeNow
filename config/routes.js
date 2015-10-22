var     express     =      require('express'),
        mysql       =      require('mysql'),
        router      =      express.Router();

var db = mysql.createConnection({
    port: 3306,
    host: 'box1077.bluehost.com',
    user: 'stephgv0_admin',
    password: '123abc',
    database: 'stephgv0_hearmenow'
});

module.exports = function(app) {

    var json = '';

    router.use(function (req, res, next) {
        console.log(req.method, req.url);
        next();
    });


    app.get('/api', function (req, res) {

        db.query('SELECT * FROM users', function (err, rows) {

            if(err) throw err;

            json = JSON.stringify(rows);

            res.send(json);

        });

    });

    app.post('/upvote/:id', function (req,res){

        db.query('')

    })
};

