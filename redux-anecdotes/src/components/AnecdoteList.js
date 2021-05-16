import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeVote } from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, handleVote}) => {
    return (
        <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={handleVote}>vote</button>
                </div>
        </div>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        const orderState = state.sort((a,b) => b.votes - a.votes) 
        return orderState
    })
    const dispatch = useDispatch()

    return (
        anecdotes.map(anecdote =>
            <Anecdote 
            key={anecdote.id}
            anecdote={anecdote}
            handleVote={() => dispatch(makeVote(anecdote.id))}
            />
        )
    )
}

export default AnecdoteList