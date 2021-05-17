import React from 'react'
import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
    // const dispatch = useDispatch()

    const handleChange = (event) => {
        // input -field value is in variable event.target.value
        // dispatch(filterChange(event.target.value))
        props.filterChange(event.target.value)
    }
    const style = {
        marginBotton: 10
    }
    return (
        <div style={style}>
            filter <input onChange={handleChange}/>
        </div>
    )
}

// export default Filter

const mapDispatchToProps = {
    filterChange,
}
export default connect(
    null,
    mapDispatchToProps
) (Filter)