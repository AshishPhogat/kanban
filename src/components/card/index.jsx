import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faSpinner,faCircleExclamation,faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    const store = [faEllipsis,faSpinner,faCircleExclamation,faCircle]
    const check = {
        "Todo":0,
        "In progress": 1,
        "Backlog":2,
    }
    return (
        <div className='rounded bg-white shadow-md p-2'>
            <p className='text-gray-400'>{props.details.id}</p>
            <p className='text-xs font-semibold flex '>
                <FontAwesomeIcon className='text-gray-400 mr-1' icon={faCircleNotch} />
                <div>
                    {props.details.title}
                </div>
            </p>
            <div className='flex items-center gap-2 text-xs'>
                <a><FontAwesomeIcon icon={store[check[props.details.status]]}/></a>
                <div className='pl-1  items-center border-2 rounded-sm flex gap-2'>
                    <FontAwesomeIcon className='text-gray-400 ' style={{"font-size":"10px"}} icon={faCircle} />
                    {props.details.tag[0]}
                </div>
            </div>
        </div>
    )
}

export default Card