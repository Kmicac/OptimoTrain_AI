// import { ChatOpenAI } from "@langchain/openai";

// import * as dotenv from "dotenv";
// dotenv.config();


// const model = new ChatOpenAI({
//     modelName: "gpt-4o",
//     temperature: 0.7,
//     maxTokens: 1000,
//     verbose: true,
//     openAIApiKey: process.env.OPENAI_API_KEY,
//     openAIBasePath: process.env.OPENAI_BASE_PATH || "https://models.inference.ai.azure.com",
// });

// const response = await model.invoke("write a plan of training for strength");
// console.log(response);

import OpenAI from "openai";

import * as dotenv from "dotenv"; 
dotenv.config();

export async function main() {

  const client = new OpenAI({
    baseURL: process.env.OPENAI_BASE_PATH,
    apiKey: process.env.OPENAI_API_KEY
  });

  const response = await client.chat.completions.create({
    messages: [
      { role:"system", content: "" },
      { role:"user", content: "write a plan of training for strength" }
    ],
    model: "gpt-4o",
    temperature: 1,
    max_tokens: 4096,
    top_p: 1
  });

  console.log(response.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});