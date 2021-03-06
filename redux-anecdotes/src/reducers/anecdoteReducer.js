import anecdoteService from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

export const getId = () => (100000 * Math.random()).toFixed(0)


const reducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    
    case 'INIT_ANECDOTE':
      return action.data

    case 'VOTE':
      // const id = action.data.id 
      // const anecdoteToChange = state.find(n => n.id === id)
      // const changedAnecdote = {
      //   ...anecdoteToChange, 
      //   votes: anecdoteToChange.votes + 1
      // }
      // return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote)

      const id = action.data.id
      return state.map(anecdote => anecdote.id === id ? action.data : anecdote)

    default:
      return state
  }
}

// export const initializeAnecdote = (anecdotes) => {
//   return {
//     type: 'INIT_ANECDOTE',
//     data: anecdotes
//   }
// }

export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })
  }
}

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

// export const createAnecdote = (data) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data
//   }
// }

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

// export const makeVote = (id) => {
//   return {
//     type: 'VOTE',
//     data: {id}
//   }
// }

export const makeVote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = {
      ...anecdote, 
      votes: anecdote.votes + 1
    }
    const newAnecdote = await anecdoteService.updateVote(anecdote.id,changedAnecdote)
    dispatch({
      type: 'VOTE',
      data: newAnecdote
    })
  }
}

export default reducer