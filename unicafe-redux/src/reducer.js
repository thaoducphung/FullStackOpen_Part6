const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const updateGood = {...state}
      updateGood.good = updateGood.good + 1
      return updateGood
    case 'OK':
      const updateOk = {...state}
      updateOk.ok = updateOk.ok + 1
      return updateOk
    case 'BAD':
      const updateBad = {...state}
      updateBad.bad = updateBad.bad + 1
      return updateBad
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer