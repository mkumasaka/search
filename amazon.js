'use strict';
const { WebClient } = require('@slack/client');
var Slack = require('./libs/slack-bot/');

// Import express and request modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

// Instantiates Express and assigns our app variable to it
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Again, we define a port we want to listen to
const PORT=7777;

// Lets start our server
app.listen('./', function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Example app listening on port " + PORT);
});

// Slackへの返信
app.post('/', function(req, res) {
    var txt = req.body.text;
    //console.log(txt);
    res.send('https://www.amazon.co.jp/s/ref=nb_sb_noss_2?__mk_ja_JP=カタカナ&url=search-alias%3Daps&field-keywords=' + txt);
});