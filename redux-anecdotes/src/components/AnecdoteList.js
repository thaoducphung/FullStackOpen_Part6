import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeVote } from '../reducers/anecdoteReducer'
import { notificationChange, emptyNotification } from '../reducers/notificationReducer'

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
        const filterState = state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
        const orderState = filterState.sort((a,b) => b.votes - a.votes) 
        return orderState
    })
    const dispatch = useDispatch()

    return (
        anecdotes.map(anecdote =>
            <Anecdote 
            key={anecdote.id}
            anecdote={anecdote}
            handleVote={() => {
                dispatch(makeVote(anecdote.id))
                dispatch(notificationChange(`you voted '${anecdote.content}'`))
                setTimeout(()=>{
                    dispatch(emptyNotification())
                },5000)
            }}
            />
        )
    )
}

export default AnecdoteList