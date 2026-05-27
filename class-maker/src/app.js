import Fastify from 'fastify'
import multipart from '@fastify/multipart'
import dotenv from 'dotenv'
import { askGemini } from './services/gemini.service.js'
import { uploadRoute } from './routes/upload.route.js'

dotenv.config()

const app = Fastify()

app.register(uploadRoute)

app.get('/', async () => {
  return {
    ok: true
  }
})

app.listen({
  port: 8000
}).then(() => {
  console.log('Server running')
})

app.get('/ia', async () => {

  try {

    const response = await askGemini(
      'responda apenas: funcionando'
    )

    return {
      response
    }

  } catch (error) {

    console.log(error.response?.data)

    return {
      error: error.message
    }

  }

})

app.get('/test', async () => {

  return {
    key: process.env.GEMINI_API_KEY
  }

})