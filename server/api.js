const express = require('express');
const cors = require('cors');
const db = require('./db.js');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const accessTokenSecret = 'youraccesstokensecret';
var https = require('https');
const sharp = require('sharp');
var compression = require('compression');

const privateKey = fs.readFileSync(
  '/etc/letsencrypt/live/rubenrebelo.xyz/privkey.pem',
  'utf8'
);
const certificate = fs.readFileSync(
  '/etc/letsencrypt/live/rubenrebelo.xyz/cert.pem',
  'utf8'
);
const ca = fs.readFileSync(
  '/etc/letsencrypt/live/rubenrebelo.xyz/chain.pem',
  'utf8'
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

var app = express();

app.use(cors({ origin: '*' }));
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'script-src': [
          "'self'",
          'https://rubenrebelo.xyz',
          'https://www.rubenrebelo.xyz',
          'https://www.youtube.com/',
          'https://player.twitch.tv/',
        ],
        'default-src': [
          "'self'",
          'https://rubenrebelo.xyz',
          'https://www.rubenrebelo.xyz',
          'https://www.youtube.com/',
          'https://player.twitch.tv/',
        ],
        'img-src': ["'self'", 'https: data:', 'blob: data:'],
      },
    },
  })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(compression());
app.set('trust proxy', 1);

const writeImageAvatar = (src, title) => {
  let base64Image = src.split(';base64,').pop();
  let imgBuffer = Buffer.from(base64Image, 'base64');
  const imagePath = `avatars/${path.parse(title).name}.webp`;

  sharp(imgBuffer)
    .resize(500, 500)
    .webp()
    .toFile('./public/' + imagePath);

  return imagePath;
};

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
};

const updateSectionsByID = (id, cols) => {
  var query = ['UPDATE public.sections'];
  query.push('SET');

  var set = [];
  Object.keys(cols).forEach(function (key, i) {
    set.push(key + ' = ($' + (i + 1) + ')');
  });
  query.push(set.join(', '));

  query.push('WHERE id = ' + id + ' RETURNING *');

  return query.join(' ');
};

app.get('/streamers', async (req, res) => {
  const results = await db.query('SELECT * FROM public.streamers ORDER BY id');
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.set('X-Total-Count', results.rows.length);
  res.send(results.rows);
});

app.get('/streamers/:id', async (req, res) => {
  const results = await db.query(
    `SELECT * FROM public.streamers WHERE id=${req.params.id}`
  );
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.set('X-Total-Count', results.rows.length);
  res.send(results.rows[0]);
});

app.post('/streamers', async (req, res) => {
  const {
    username,
    description,
    url,
    avatar,
    pronouns,
    videourl,
    twitter,
    youtube,
    tiktok,
    facebook,
    instagram,
    role,
  } = req.body;
  const image = avatar.src;
  const path = writeImageAvatar(image, avatar.title);
  var queryConfig = {
    text: 'INSERT into public.streamers (username, url, description, avatar, avatargif, pronouns, videourl, twitter, youtube, tiktok, facebook, instagram, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id',
    values: [
      username,
      url,
      description,
      'https://www.rubenrebelo.xyz/' + path,
      'https://www.rubenrebelo.xyz/avatars/eevo_pose.gif',
      pronouns,
      videourl,
      twitter ? twitter : null,
      youtube ? youtube : null,
      tiktok ? tiktok : null,
      facebook ? facebook : null,
      instagram ? instagram : null,
      role,
    ],
  };

  const results = await db.query(queryConfig);
  res.send(results.rows[0]);
});

app.delete('/streamers/:id', async (req, res) => {
  const results = await db.query(
    `DELETE FROM public.streamers WHERE id=${req.params.id}`
  );
  res.send({});
});

app.put('/streamers/:id', async (req, res) => {
  const { id, avatar } = req.body;
  const body = req.body;
  delete body.id;
  const regExp = new RegExp(
    '^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$'
  );
  const stringAvatar = typeof avatar === 'string';

  const image = avatar.src;
  const path = writeImageAvatar(image, avatar.title);
  body.avatar = 'https://www.rubenrebelo.xyz/' + path;
  if (!stringAvatar) {
    const image = avatar.src;
    const path = writeImageAvatar(image, avatar.title);
    body.avatar = 'https://www.rubenrebelo.xyz/' + path;
  } else {
    if (fs.existsSync(`./public/avatars/${avatar.title}`)) {
      fs.unlinkSync(`./public/avatars/${avatar.title}`);
    } else {
      delete body.avatar;
    }
  }

  const values = Object.keys(body).map(function (key) {
    return req.body[key];
  });

  const queryConfig = {
    text: updateProductByID(id, body),
    values,
  };

  const results = await db.query(queryConfig);
  res.send(results.rows[0]);
});

const users = [
  {
    username: 'eevoTest',
    password: 'eevoTest',
  },
];

app.get('/sections', async (req, res) => {
  const results = await db.query('SELECT * FROM public.sections ORDER BY id');
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.set('X-Total-Count', results.rows.length);
  res.send(results.rows);
});

app.get('/sections/:id', async (req, res) => {
  const results = await db.query(
    `SELECT * FROM public.sections WHERE id=${req.params.id}`
  );
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.set('X-Total-Count', results.rows.length);
  res.send(results.rows[0]);
});

app.post('/sections', async (req, res) => {
  const { title, text, position } = req.body;
  var queryConfig = {
    text: 'INSERT into public.sections (title, text, position) VALUES ($1, $2, $3) RETURNING id',
    values: [title, text, position],
  };

  const results = await db.query(queryConfig);
  res.send(results.rows[0]);
});

app.delete('/sections/:id', async (req, res) => {
  const results = await db.query(
    `DELETE FROM public.sections WHERE id=${req.params.id}`
  );
  res.send({});
});

app.put('/sections/:id', async (req, res) => {
  const { id, title, text } = req.body;
  const body = req.body;
  delete body.id;

  const values = Object.keys(body).map(function (key) {
    return req.body[key];
  });

  const queryConfig = {
    text: updateSectionsByID(id, body),
    values,
  };

  const results = await db.query(queryConfig);
  res.send(results.rows[0]);
});

app.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      { username: user.username },
      accessTokenSecret
    );

    res.json({
      token: accessToken,
    });
  } else {
    res.sendStatus(401);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(8080, () => {
  console.log('HTTPS Server running on port 443');
});
