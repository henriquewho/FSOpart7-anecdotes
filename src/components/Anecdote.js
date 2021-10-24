import React from 'react'
import { useParams } from 'react-router-dom'

function Anecdote({anecdotes}) {
    const id = useParams().id; 
    const anec = anecdotes.find(each => each.id === id)

    return (
        <div>
            <p><strong>Content: </strong> {anec.content}</p>
            <p><strong>Author: </strong> {anec.author}</p>
            <p><strong>Votes: </strong> {anec.votes}</p>
        </div>
    )
}

export default Anecdote
