import { readPdfText } from 'pdf-text-reader'

export async function extractPdfText(filePath) {

  const text = await readPdfText({
    url: filePath
  })

  return text

}