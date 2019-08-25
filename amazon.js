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
});

// Slackへの返信
app.post('/', function(req, res) {
    var txt = req.body.text;
    const url = 'https://www.amazon.co.jp/s/ref=nb_sb_noss_2?__mk_ja_JP=カタカナ&url=search-alias%3Daps&field-keywords=' + txt;
    const attachments = [
        {
            "fallback": "結果",
            "pretext": "検索結果です",
            "color": "#F000000",
            "fields": [
                {
                    "title": "amazon",
                    "value": "Result",
                    "text": url
                }
            ]
        }
    ]

    const options = {
        uri: response_url,
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        attachments: attachments
    }

    res.post(options)
        .catch((error) => {

        }
});