import axios from 'axios'

export async function renderMermaid(code) {

  const base64 = Buffer
    .from(code)
    .toString('base64')

  const url =
    `https://mermaid.ink/svg/${base64}`

  const response = await axios.get(url)

  return response.data
}