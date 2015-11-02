# FizzBuzz

## Quickstart:

1. Download NodeJS https://nodejs.org/en/

2. `git clone https://github.com/shampooj/FizzBuzz.git`

3. cd into the FizzBuzz directory

4. From the terminal, run `npm install` to install all node modules

5. Run `npm install ngrok -g` and `ngrok http 3000` to acquire a forwarding URL for `localhost:3000`, which Twilio requires.

6. Substitute in your Twilio Auth Token and the Forwarding URL below as environment variables and run the command:

   `TWILIO_AUTH_TOKEN={your token here} FORWARDING_URL={your url here} node index.js`

7. Configure your Twilio phone number to point to your `FORWARDING_URL/fizzbuzz` in Twilio Settings

Call your Twilio number and enjoy the game!

## TEST:

1. `TWILIO_AUTH_TOKEN={your token here} npm test`
