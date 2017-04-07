'use strict';

const twitter = require('twitter');

module.exports.tweet = (event, context, callback) => {
    const client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    });

    const params = {
        screen_name: 'etdrivingschool'
    }
    
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
            callback(error);
        }

        const result = {
            "statusCode": 200,
            "headers": {},
            "body": JSON.stringify(tweets)
        };
        callback(null, result);
    });
};