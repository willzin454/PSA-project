import axios from 'axios'

export async function askGemini(prompt) {

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    }
  )

  return response.data
    .candidates[0]
    .content
    .parts[0]
    .text
}