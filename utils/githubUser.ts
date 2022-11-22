import { Repository } from '../components/molecules/ProjectListItem'

interface IUser {
  name: String
  bio: String
  repositories: {
    nodes: Repository[]
  }
}

export const getGithubReposAndPackagesUsed = (user: IUser) => {
  const getPackageJson = (githubRepository: Repository) =>
    githubRepository.object.entries.filter((page) => page.name === 'package.json')

  return user.repositories.nodes
    .map((repository) => ({
      name: repository.name,
      packages: getPackageJson(repository)[0],
    }))
    .filter((repository) => repository.packages !== undefined)
    .map((repo) => ({
      name: repo.name,
      packages: [
        !!JSON.parse(repo.packages.object.text).dependencies
          ? Object.keys(JSON.parse(repo.packages.object.text).dependencies)
          : [],
        !!JSON.parse(repo.packages.object.text).devDependencies
          ? Object.keys(JSON.parse(repo.packages.object.text).devDependencies)
          : [],
      ].flat(),
    }))
}
