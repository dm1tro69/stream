import React, {useEffect, useRef} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchStream} from "../../actions";
import {useParams} from 'react-router-dom'
import flv from "flv.js"

const StreamShow = () => {

    const dispatch = useDispatch()

    const {id} = useParams()

    const stream = useSelector(state => state.streams[id])

    const videoRef = useRef()

    useEffect(()=> {
        dispatch(fetchStream(id))
    }, [])
    
    if (!stream){
        return <div>Loading...</div>
    }

return (
<div>
    <video ref={videoRef} style={{width: '100%'}} controls={true}/>
    <h1>{stream.title}</h1>
    <h5>{stream.description}</h5>
</div>
)
}
export default StreamShow