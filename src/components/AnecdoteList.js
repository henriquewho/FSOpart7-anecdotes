import React from 'react'
import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(each => {
          return <li key={each.id}> <Link to={`/anecdotes/${each.id}`}>{each.content}</Link> </li>
        })}
      </ul>
    </div>
)

export default AnecdoteList
