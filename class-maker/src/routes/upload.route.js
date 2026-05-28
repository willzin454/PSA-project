import fs from 'fs-extra'
import path from 'path'

import { extractPdfText }
from '../services/pdf.service.js'

import { askGemini }
from '../services/gemini.service.js'

import { buildMermaidPrompt }
from '../prompts/mermaid.prompt.js'

import { cleanMermaid }
from '../utils/clean-mermaid.js'

import { renderMermaid }
from '../services/mermaid.service.js'

export async function uploadRoute(app) {

    app.post('/upload', async (req, reply) => {

    try {

      const data = await req.file()

      const filePath = path.join(
        'uploads',
        data.filename
      )

      await fs.writeFile(
        filePath,
        await data.toBuffer()
      )

      const text = await extractPdfText(filePath)

      const prompt = buildMermaidPrompt(text)

      const rawMermaid =
        await askGemini(prompt)

      const mermaid =
        cleanMermaid(rawMermaid)

      const svg = 
        await renderMermaid(mermaid)

      return {
        uploaded: true,
        mermaid,
        svg
      }

    } catch (error) {

      console.log(error)

      return reply.status(500).send({
        error: error.message
      })

    }

  })
}