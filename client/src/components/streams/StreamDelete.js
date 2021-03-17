import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";
import {useParams, useHistory} from "react-router-dom"
import Modal from "../Modal";

const StreamDelete = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const history = useHistory()

    const stream = useSelector(state => state.streams[params.id])


    useEffect(()=> {
       dispatch(fetchStream(params.id))
    },[])

    const renderActions = ()=> {
       return  (
        <>
            <button onClick={()=> dispatch(deleteStream(stream.id))} className="ui negative button">Delete</button>

            <button onClick={()=> history.push('/')} className="ui button">Cancel</button>
        </>

    )}
    
    if (!stream){
        return <div>Loading...</div>
    }

return (
<div>
    StreamDelete
    <Modal

        actions={renderActions()}
        content={`Are you sure you want to delete this stream? ${stream.title}`}
        title={"Delete Stream"} />
</div>
)
}
 export default StreamDelete