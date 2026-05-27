import fs from 'fs-extra'
import path from 'path'
import { extractPdfText } from '../services/pdf.service.js'
import { askGemini } from '../services/gemini.service.js'
import { buildMermaidPrompt } from '../prompts/mermaid.prompt.js'
import { renderMermaid } from '../services/mermaid.service.js'

export async function uploadRoute(app) {

  app.post('/upload', async (req, reply) => {

    const data = await req.file()

    const prompt = buildMermaidPrompt(text)
    
    const text = await extractPdfText(filePath)
    
    const mermaid = await askGemini(prompt)

    const svg = await renderMermaid(mermaid)

    const filePath = path.join(
      'uploads',
      data.filename
    )

    await fs.writeFile(
      filePath,
      await data.toBuffer()
    )

    return {
      uploaded: true,
      file: filePath,
      text,
      mermaid,
      svg
    }
  })

}