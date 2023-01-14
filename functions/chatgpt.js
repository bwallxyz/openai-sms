const { Configuration, OpenAIApi } = require("openai");
exports.handler = async function(context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  const inbMsg = event.Body.toLowerCase().trim();
  const configuration = new Configuration({
    //organization: "org-Oyoa0o8GqjpBw4Bbhb5ek8ou",
    apiKey: process.env.OPENAI_API_KEY
});

  console.log(process.env.OPENAI_API_KEY)

  const openai = new OpenAIApi(configuration);
  console.log("connected to OpenAI")
  try {
    const completion = await openai.createCompletion({
      model: "text-curie-001",
      prompt: inbMsg,
      temperature: 0.7, //A number between 0 and 1 that determines how many creative risks the engine takes when generating text.
      max_tokens: 160, // Maximum completion length.
      frequency_penalty: 0.7 // # between 0 and 1. The higher this value, the bigger the effort the model will make in not repeating itself.
    });
    twiml.message(completion.data.choices[0].text);
    console.log(completion.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      twiml.message(error.repsonse.data);
    } else {
      console.log(error.message);
    }
  }
  callback(null, twiml);
};
