export type Challenge = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Linguagem de estilos" },
  { id: 2, word: "REACT", tip: "Biblioteca para criar interfaces Web" },
  { id: 3, word: "HTML", tip: "Linguagem de marcação" },
  {
    id: 4,
    word: "Javascript",
    tip: "Uma das linguagens de programação mais utilizadas no mundo",
  },
  { id: 5, word: "Typescript", tip: "Para adicionar tipagem no Javascript" },
  { id: 6, word: "NODE", tip: "Ambiente para executar JavaScript no servidor" },
  { id: 7, word: "VITE", tip: "Ferramenta de build rápida para aplicações web" },
  { id: 8, word: "HOOKS", tip: "Funções para usar estado e ciclo de vida no React" },
  { id: 9, word: "PROPS", tip: "Dados passados de um componente para outro" },
  { id: 10, word: "STATE", tip: "Estado interno que pode mudar ao longo do tempo" },
  { id: 11, word: "ROUTE", tip: "Caminho que define uma página ou visualização" },
  { id: 12, word: "API", tip: "Interface para comunicação entre sistemas" },
  { id: 13, word: "JSON", tip: "Formato leve para troca de dados" },
  { id: 14, word: "FORM", tip: "Estrutura para coletar dados do usuário" },
  { id: 15, word: "LOGIN", tip: "Ação de entrar em uma aplicação" },
]
