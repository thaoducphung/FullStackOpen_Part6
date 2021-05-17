
import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification === null) {
    return null
  }
  return (
    <div style={style}>
      {/* render here notification... */}
      {notification}
    </div>
  )
}

export default Notification