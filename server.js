const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });





// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(input) {
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = input;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
rl.on('line', (input) => {

    console.log(`Received: ${input}`);
    run(input)
    if(input === 'q')
    {
        rl.close();
    }
  });
