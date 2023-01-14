# OpenAI SMS Bot

Receive SMS responses from OpenAI API using Twilio

## Set an Environment Variable with Twilio Functions and Assets
Open up your `.env file` for your Functions project in your root directory and add the following line:

```bash
OPENAI_API_KEY=YOUR-OPENAI-API-KEY
```
Now you can access this API Key if you'd like to do so in your code with `context.OPENAI_API_KEY`.

## Configure the Serverless Function with a Twilio Phone Number

To open up our app to the web with a public-facing URL, run `twilio serverless:deploy` from the root directory.

Grab the Function URL corresponding to your app (the one that ends with `/chatgpt`) and configure a Twilio phone number with it as shown below: select a Twilio number you purchased in your Twilio phone numbers console and scroll down to the `Messaging` section. Paste the link in the text field for `A MESSAGE COMES IN` webhook making sure that it's set to `HTTP POST`.

Now take out your phone and text a question or prompt to your Twilio number.

