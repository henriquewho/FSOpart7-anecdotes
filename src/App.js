import React, { useState } from 'react'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom'

import './index.css'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')
  const [message, setMessage] = useState({text:null, type:null}); 

  const history = useHistory(); 
  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    
    history.push('/');
    setMessage({text: 'A new item was created', type: 'success'}); 
    setTimeout(()=>setMessage({text: null, type: null}), 3000);
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />

      <Switch>
        <Route path='/anecdotes/:id'> <Anecdote anecdotes={anecdotes}/></Route>
        <Route path='/about'> <About /> </Route>
        <Route path='/create'> <CreateNew addNew={addNew}/> </Route>
        <Route path='/'> <AnecdoteList anecdotes={anecdotes}/> </Route>
      </Switch>

      <Footer />
      <Notification message={message.text} type={message.type}/>
    </div>
  )
}

export default App;