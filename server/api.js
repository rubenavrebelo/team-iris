const express = require("express");
const cors = require("cors");
const db = require("./db");
const fs =  require('fs')
const path = require('path');

var app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("trust proxy", 1);


var corsOptions = {
    origin: '*',
    exposedHeaders: 'Content-Range, X-Total-Count'
  }

app.get('/streamers', async (req, res)=> {
    const results = await db.query("SELECT * FROM public.streamers");
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
    let base64Image = image.split(';base64,').pop();
    const path = `avatars/${avatar.title}`;
    fs.writeFile('./public/'+path, base64Image, 'base64', function(err) {
        console.log('File created');
    });
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

app.listen(process.env.PORT || "8080", async () => {
    console.log("Cmon server lets get SERVING");
  });