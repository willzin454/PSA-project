import Fastify from 'fastify'
import multipart from '@fastify/multipart'
import dotenv from 'dotenv'

import { uploadRoute }
from './routes/upload.route.js'

dotenv.config()

const app = Fastify()

app.register(multipart)

app.register(uploadRoute)

app.listen({
  port: 8000
}).then(() => {

  console.log('Server running')

})