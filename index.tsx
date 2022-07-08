type Repository = {
  name: String
  description: String
  languages: {
    nodes: Language[]
  }
  primaryLanguage: Language
  repositoryTopics: {
    nodes: Topic[]
  }
}

type Language = {
  name: String
}

type Topic = {
  name: String
}
export const ProjectListItem = (repository: Repository, key: number) => {
  console.log(repository)
  return (
    <section>
      <h4>{repository.name}</h4>
      <p>{repository.description}</p>
    </section>
  )
}
