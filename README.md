# FizzBuzz

## Quickstart:

1. Download NodeJS https://nodejs.org/en/

2. `git clone https://github.com/shampooj/FizzBuzz.git`

3. cd into the FizzBuzz directory

4. Checkout a new branch `git checkout -b phase2Form` and pull the branch `git pull origin phase2Form`

5. From the terminal, run `npm install` to install all node modules

6. Run `npm install ngrok -g` and `ngrok http 3000` to acquire a forwarding URL for `localhost:3000`, which Twilio requires.

7. Configure your Twilio phone number to point to your `FORWARDING_URL/fizzbuzz` in Twilio Settings, and verify a number to which to make calls

8. Substitute in your Twilio Auth Token, Twilio Account SID, Twilio Number, and the Forwarding URL below as environment variables and run the command:

   `TWILIO_AUTH_TOKEN=yourtokenhere FORWARDING_URL=yourURLhere TWILIO_ACCOUNT_SID=yourid TWILIO_NUMBER=yournumber node index.js`

The browser will automatically open, prompting you to play.

## TEST:

1. Download NodeJS https://nodejs.org/en/

2. `git clone https://github.com/shampooj/FizzBuzz.git`

3. cd into the FizzBuzz directory

4. Checkout a new branch `git checkout -b phase2Form` and pull the branch `git pull origin phase2Form`

5. From the terminal, run `npm install` to install all node modules

6. Run `npm install ngrok -g` and `ngrok http 3000` to acquire a forwarding URL for `localhost:3000`, which Twilio requires.

7. Configure your Twilio phone number to point to your `FORWARDING_URL/fizzbuzz` in Twilio Settings, and verify a number from which to make calls

8. Substitute in your Twilio Auth Token, Twilio Account SID, Twilio Number, verified Phone Number to call, and the Forwarding URL below as environment variables and run the command (make sure that your PHONE_NUMBER is formatted with country code ie: +15555555):

   `TWILIO_AUTH_TOKEN=yourtokenhere FORWARDING_URL=yourURLhere TWILIO_ACCOUNT_SID=yourid TWILIO_NUMBER=yournumber PHONE_NUMBER=numberToCall npm test`

## TODO:

1. TLS enabled server to allow for Twilio Signature authentication: See index.js and routes.js and for comments
Associated tests with TLS server

2. Twiml phone input validation from user and associated tests

3. More error handling!

4. Input validation on form, to ensure the user has entered a properly formatted number, and associated tests

5. Full E2E test with a fake DOM!
