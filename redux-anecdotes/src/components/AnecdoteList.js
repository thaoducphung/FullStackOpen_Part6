import React from 'react'
import { connect } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'
import { makeVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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

const AnecdoteList = (props) => {
    // const anecdotes = useSelector(state => {
    //     const filterState = state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
    //     const orderState = filterState.sort((a,b) => b.votes - a.votes) 
    //     return orderState
    // })
    // const dispatch = useDispatch()

    return (
        props.anecdotes.map(anecdote =>
            <Anecdote 
            key={anecdote.id}
            anecdote={anecdote}
            handleVote={() => {
                // dispatch(makeVote(anecdote))
                // dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
                props.makeVote(anecdote)
                props.setNotification(`you voted '${anecdote.content}'`, 5)
            }}
            />
        )
    )
}

// export default AnecdoteList

const mapStateToProps = state => {
    const filterState = state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
    const orderState = filterState.sort((a,b) => b.votes - a.votes) 
    return {
        anecdotes: orderState
    }
}

const mapDispatchToProps = {
    makeVote,
    setNotification,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AnecdoteList)