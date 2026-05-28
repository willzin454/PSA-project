export function buildMermaidPrompt(text) {

  return `
Você é um arquiteto de software.

Gere um diagrama UML Mermaid usando classDiagram.

REGRAS:
- Retorne APENAS Mermaid
- Sem markdown
- Sem explicações
- Sem blocos \`\`\`
- Use classDiagram
- Inclua classes
- Inclua atributos
- Inclua relacionamentos

Requisitos:
${text}
`

}