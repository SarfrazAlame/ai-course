import dotenv from 'dotenv'
dotenv.config()

import OpenAI from 'openai'


const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model:'omni-moderation-*',
  temperature:0,
  messages:[
    {
      role:"user",
      content:"Hey My name is Aftab, can you tell me the meaning of it"
    }
  ]
})

console.log(response.choices)
