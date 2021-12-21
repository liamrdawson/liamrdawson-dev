export interface ILanguage {
  languageName: string
  languageDescription: string
}

export const languages: ILanguage[] = [
  {
    languageName: `JavaScript`,
    languageDescription: `My “native” language, JavaScript is the language I use most at work. I’ve used in on the Front End with React and Redux, and I’m currently using it heavily to build our new Back End codebase with Node.`,
  },
  {
    languageName: `TypeScript`,
    languageDescription: `Some fancy text`,
  },
  {
    languageName: `Perl`,
    languageDescription: `Some fancy text about what I like about writing in Perl. Look how much I've learned.`,
  },
  {
    languageName: `Go`,
    languageDescription: `I've only just started learning about Go, but here's what I think about it.`,
  },
]
