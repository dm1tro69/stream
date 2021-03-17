import React, {useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash"

const StreamEdit = () => {
    const value = useParams()
   const dispatch = useDispatch()
   const stream = useSelector(state => state.streams[value.id])
    const history = useHistory()

    useEffect(()=> {
        dispatch(fetchStream(value.id))
    }, [])

    const onSubmit = (formValues) => {
        dispatch(editStream(value.id, formValues))
        // history.push('/')
    }

    if(!stream){
        return <div>Loading...</div>
    }
return (
    
    <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={_.pick(stream, 'title', 'description')} onSubmit={onSubmit}/>
    </div>
)
}
export default StreamEdit