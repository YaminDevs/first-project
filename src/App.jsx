import './App.css'
import CardList from './CardList'
import SearchBox from './SearchBox'
import React ,{ Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ robots : users }))
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value })
}

render(){
  const filterRobots = this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })

  return (
    <>
      <h1> Robo Friends </h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filterRobots}/>
    </>
  )
}

}

export default App