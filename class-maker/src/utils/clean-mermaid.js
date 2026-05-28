export function cleanMermaid(text) {

  return text
    .replace(/```mermaid/g, '')
    .replace(/```/g, '')
    .trim()

}