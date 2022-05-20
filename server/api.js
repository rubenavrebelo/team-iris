const express = require("express");
const cors = require("cors");
const db = require("./db.js");
const fs =  require('fs')
const path = require('path');
const helmet = require("helmet");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const accessTokenSecret = 'youraccesstokensecret';


var app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("trust proxy", 1);


const writeImageAvatar = (src, title) => {
    let base64Image = src.split(';base64,').pop();
    const path = `avatars/${title}`;
    fs.writeFile('./public/'+path, base64Image, 'base64', function(err) {
        console.log('File created');
    });
    return path;
}

const updateProductByID = (id, cols) => {
    var query = ['UPDATE public.streamers'];
    query.push('SET');
  
    var set = [];
    Object.keys(cols).forEach(function (key, i) {
      set.push(key + ' = ($' + (i + 1) + ')'); 
    });
    query.push(set.join(', '));
  
    query.push('WHERE id = ' + id + ' RETURNING *');
  
    return query.join(' ');
  }

app.get('/streamers', async (req, res)=> {
    const results = await db.query("SELECT * FROM public.streamers ORDER BY id");
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', results.rows.length);
    res.send(results.rows);
})

app.get('/streamers/:id', async (req, res)=> {
    const results = await db.query(`SELECT * FROM public.streamers WHERE id=${req.params.id}`);
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', results.rows.length);
    res.send(results.rows[0]);
})

app.post('/streamers', async (req, res)=> {
    const {username, description, url, avatar, pronouns, videourl} = req.body;
    const image = avatar.src;
    const path = writeImageAvatar(image, avatar.title);
    var queryConfig = {
        text: 'INSERT into public.streamers (username, url, description, avatar, pronouns, videourl) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
        values: [username, url, description, "http://localhost:8080/"+path, pronouns, videourl]
    };
    
    const results = await db.query(queryConfig);
    res.send(results.rows[0]);
})

app.delete('/streamers/:id', async (req, res)=> {
    const results = await db.query(`DELETE FROM public.streamers WHERE id=${req.params.id}`)
    res.send({});
})

app.put('/streamers/:id', async (req, res)=> {
    const {id, avatar} = req.body;
    const body = req.body;
    delete body.id;
    const regExp = new RegExp('^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$');
    const stringAvatar = typeof avatar === 'string';
    if(!stringAvatar) {
        const image = avatar.src;
        const path = writeImageAvatar(image, avatar.title);
        body.avatar = "http://localhost:8080/"+path;
    } else {
        delete body.avatar;
    }

    const values = Object.keys(body).map(function (key) {
        return req.body[key];
      });
    
    const queryConfig = {
        text: updateProductByID(id, body),
        values
    }

    const results = await db.query(queryConfig)
    res.send(results.rows[0]);
})


const users = [
    {
        username: 'eevoTest',
        password: 'eevoTest',
    }, 
];

app.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

        res.json({
            token: accessToken
        });
        
    } else {
        res.sendStatus(401);
    }
});

app.listen(process.env.PORT || "8080", async () => {
    console.log("Cmon server lets get SERVING");
  });