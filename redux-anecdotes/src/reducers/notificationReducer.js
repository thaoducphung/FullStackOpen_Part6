const initialNotification = null

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'NOTIFY':
            return action.data
        case 'EMPTY':
            return null
        default:
            return state
    }
}

// export const notificationChange = notification => {
//     return {
//         type: 'NOTIFY',
//         notification,
//     }
// }

let timeoutID = null
export const setNotification = (notification,second) => {
    return async dispatch => {
        clearTimeout(timeoutID)
        dispatch({
            type: 'NOTIFY',
            data: notification
        })
        timeoutID = setTimeout(() => {
            dispatch({
                type: 'EMPTY',
                data: null
            })
        }, second*1000)
    }
}

export const emptyNotification = () => {
    return {
        type: 'EMPTY',
    }
}

export default notificationReducer