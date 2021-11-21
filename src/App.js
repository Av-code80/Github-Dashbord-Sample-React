//libraries
import { useState } from 'react'

//components
import MainHeader from './components/MainHeader'
import Repo from './components/Repo'
import Repos from './components/Repos'
import Search from './components/Search'
import Footer from './components/Footer'

//styles
import './App.css'

const App = () => { 
  //states
  const [username, setUsername] = useState('') // logic for username selection
  const [userRepos, setUserRepos] = useState([]) // logic for repo searching
  const [selectedRepo, setSelectedRepo] = useState(null) // logic for showing each repo's data
  const [currentPage, setCurrentPage] = useState('SEARCH')
  // valid pages: SEARCH | REPO_LIST | REPO

  const handleSearchComplete = (user, repos) => {     
    setUsername(user)
    setUserRepos(repos)
    setCurrentPage('REPO_LIST')
  }

  const handleRepoSelect = (repo) => {
    setSelectedRepo(repo)
    setCurrentPage('REPO')
  }

  const handleBackClick = () => {
    if (currentPage === 'REPO') setCurrentPage('REPO_LIST')
    if (currentPage === 'REPO_LIST') setCurrentPage('SEARCH')
  }

  const handleHomeClick = () => {
    setCurrentPage('SEARCH')
  }

  return (
    <div className="App">
      <MainHeader />
      {currentPage === 'SEARCH' && (
        <Search onSearchComplete={handleSearchComplete} />
      )}
      {currentPage === 'REPO_LIST' && (
        <Repos
          username={username}
          userRepos={userRepos}
          onRepoSelect={handleRepoSelect}
        />
      )}
      {currentPage === 'REPO' && <Repo selectedRepo={selectedRepo} />}
      
      <Footer onBackClick={handleBackClick} onHomeClick={handleHomeClick} />
    </div>
  )
}

export default App
