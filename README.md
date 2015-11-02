# FizzBuzz

## Quickstart:

Download NodeJS https://nodejs.org/en/

git clone https://github.com/shampooj/FizzBuzz.git

cd into the FizzBuzz directory

From the terminal, run `npm install` to install all node modules

Run `ngrok http 3000` to acquire a forwarding URL for localhost:3000, which Twilio requires.

Substitute in your Twilio Auth Token and the Forwarding URL below as environment variables and run the command:

`TWILIO_AUTH_TOKEN={your token here} FORWARDING_URL={your url here} node index.js`

Configure your Twilio phone number to point to your `FORWARDING_URL/fizzbuzz`

Call you Twilio number and enjoy the game!

## TEST:

`TWILIO_AUTH_TOKEN={your token here} npm test`
