import axios from 'axios'

export async function renderMermaid(code) {

  const encoded = Buffer
    .from(code)
    .toString('base64')

  const url =
    `https://mermaid.ink/svg/${encoded}`

  const response = await axios.get(url)

  return response.data

}