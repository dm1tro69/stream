import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from '../actions/history'

const Modal = ({title, content, actions}) => {
return ReactDOM.createPortal(
    <div onClick={()=> createBrowserHistory.push('/')} className="ui dimmer modals visible active">
        <div onClick={(event => event.stopPropagation())} className="ui standard modal visible active">
           <div className="header">
               {title}
           </div>
            <div className="content">
                {content}
            </div>
            <div className="actions">
                {actions}
            </div>
        </div>
    </div>,
    document.querySelector('#modal')
)

}
export default Modal