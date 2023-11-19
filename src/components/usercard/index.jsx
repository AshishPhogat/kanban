import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis,faPlus } from '@fortawesome/free-solid-svg-icons';

//components
import Card from '../card';

function UserCard(props) {
    const username = props.username;
    const tasks = props.task;
    return (
        <div className='flex text-sm flex-col gap-2 bg-gray-200 w-full'>
            <div className='flex ' style={{"justifyContent":"space-between"}}>
                <div><a >{username} <a className='text-gray-400'>{tasks.length}</a></a></div>
                <div>
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>

            {tasks.map((task)=>{
                return <Card details={task}/>
            })}
        </div>
    )
}

export default UserCard