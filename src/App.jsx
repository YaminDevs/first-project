import './App.css'
import { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import React from 'react'

const App = () => {

const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('')

useEffect(() => { 
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => setRobots(users))
},[])

const onSearchChange = (event) => {
  setSearchfield(event.target.value)
}

const filterRobots = robots.filter(robot => {
  return robot.name.toLowerCase().includes(searchfield.toLowerCase())
})

  return (
    <div className='app'>
      <h1> Robo Friends </h1>
      <SearchBox searchChange={onSearchChange}/>
      <CardList robots={filterRobots}/>
    </div>
  )
}


export default App