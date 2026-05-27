import fs from 'fs'

export async function extractPdfText(filePath) {

  const pdfParse = (await import('pdf-parse')).default

  const buffer = fs.readFileSync(filePath)

  const data = await pdfParse(buffer)

  return data.text
}