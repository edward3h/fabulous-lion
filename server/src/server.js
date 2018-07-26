import express from 'express';
import webpack from 'webpack';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import ppfb from './ppfb';

ppfb(passport);

const port = process.env.PORT;
console.log(port);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

import wpconfig from '../../webpack.config.dev';
const compiler = webpack(wpconfig);
app.use(require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: wpconfig.output.publicPath
}));

app.use(morgan('combined'));

app.use(passport.initialize())
app.use(passport.session())

import apirouter from './api';
app.use('/api', apirouter);

import authrouter from './auth';
app.use('/auth', authrouter);

app.get('/*', (req, res) => {
  res.sendFile('/app/public/index.html');
});

app.listen(port, err => {
        if(err) {
                console.log(err);
        } else {
                console.log("Hello");
        }
});

