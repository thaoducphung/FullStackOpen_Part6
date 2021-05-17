const initialNotification = null

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'NOTIFY':
            return action.notification
        case 'EMPTY':
            return null
        default:
            return state
    }
}

export const notificationChange = notification => {
    return {
        type: 'NOTIFY',
        notification,
    }
}

export const emptyNotification = () => {
    return {
        type: 'EMPTY',
    }
}

export default notificationReducer