export function buildMermaidPrompt(text) {

  return `
Gere apenas um diagrama Mermaid UML.

Sem explicações.

Requisitos:
${text}
`

}