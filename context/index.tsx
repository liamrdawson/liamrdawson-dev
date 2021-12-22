import React, { createContext, ReactNode, useState } from 'react'

export interface ILanguage {
  name: string
  description: string
}

export const languages = [
  {
    name: `JavaScript`,
    description: `My “native” language, JavaScript is the language I use most at work. I’ve used in on the Front End with React and Redux, and I’m currently using it heavily to build our new Back End codebase with Node.`,
  },
  {
    name: `TypeScript`,
    description: `Some fancy text`,
  },
  {
    name: `Perl`,
    description: `Some fancy text about what I like about writing in Perl. Look how much I've learned.`,
  },
  {
    name: `Go`,
    description: `I've only just started learning about Go, but here's what I think about it.`,
  },
]

// Create Context Object
export const LanguageContext = createContext<[ILanguage, React.Dispatch<any>]>([languages[0], () => {}])

interface IProviderProps {
  children: ReactNode
  languages: ILanguage[]
}

// Create a provider for components to consume and subscribe to changes
export const LanguageContextProvider = ({ children, languages }: IProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  return <LanguageContext.Provider value={[currentLanguage, setCurrentLanguage]}>{children}</LanguageContext.Provider>
}
