import React, { useContext, useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders,faChevronDown ,faChevronUp } from '@fortawesome/free-solid-svg-icons';

//context
import { GOContext } from '../../Context/GoContext';


function Navbar() {
    const [down,setDown] = useState(0);
    const {go,Setgo} = useContext(GOContext);

    
    
    const handleChange = (e) =>{
        e.preventDefault();
        Setgo(prev=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

  return (

    <>
        <div>
                <div className='flex gap-2 items-center w-24 z-3 shadow-md text-xs rounded p-2 m-5 border border-black-400'>
                    <FontAwesomeIcon icon={faSliders} />
                    <a onClick={()=>{setDown((down+1)%2)}}>Display</a>
                    {(down==1)?
                        <div className='fixed flex flex-col gap-2 top-14 left-5 rounded bg-gray-100 p-5 '>
                            <label className='block'>
                            <a className='mr-2'>Grouping:</a>
                                <select name="Group" onChange={handleChange} value={go.Group} className='rounded'>
                                    <option value="status"> Status</option>
                                    <option value="user"> User</option>
                                    <option value="priority">Priority</option>
                                </select>
                                </label>
                            <label className='block'>
                                <a className='mr-2'>Ordering:</a>
                                <select name="Order" onChange={handleChange} value={go.Order} className='rounded'>
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </label>
                        </div>
                    :null}
                    <FontAwesomeIcon icon={((down==0)?faChevronDown:faChevronUp)} />
                </div>
        </div>
    </>
  )
}

export default Navbar;