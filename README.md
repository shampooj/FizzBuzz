# FizzBuzz

## Quickstart:

1. Download NodeJS https://nodejs.org/en/

2. `git clone https://github.com/shampooj/FizzBuzz.git`

3. cd into the FizzBuzz directory

4. Checkout a new branch `git checkout -b phase1` and pull the branch `git pull origin phase1`

5. From the terminal, run `npm install` to install all node modules

6. Run `npm install ngrok -g` and `ngrok http 3000` to acquire a forwarding URL for `localhost:3000`, which Twilio requires.

7. Substitute in your Twilio Auth Token and the Forwarding URL below as environment variables and run the command:

   `TWILIO_AUTH_TOKEN=yourtokenhere FORWARDING_URL=yourURLhere node index.js`

8. Configure your Twilio phone number to point to your `FORWARDING_URL/fizzbuzz` in Twilio Settings

Call your Twilio number and enjoy the game!

## TEST:

1. Download NodeJS https://nodejs.org/en/

2. `git clone https://github.com/shampooj/FizzBuzz.git`

3. cd into the FizzBuzz directory

4. Checkout a new branch `git checkout -b phase1` and pull the branch `git pull origin phase1`

5. From the terminal, run `npm install` to install all node modules

6. Run `npm install ngrok -g` and `ngrok http 3000` to acquire a forwarding URL for `localhost:3000`, which Twilio requires.

7. Configure your Twilio phone number to point to your `FORWARDING_URL/fizzbuzz` in Twilio Settings, and verify a number from which to make calls

8. Substitute in your Twilio Auth Token and the Forwarding URL as environment variables and run

   `TWILIO_AUTH_TOKEN=yourtokenhere FORWARDING_URL=yourURLhere npm test`
