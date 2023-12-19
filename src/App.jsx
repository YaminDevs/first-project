import './App.css'
import {robots} from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
import React ,{ Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
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