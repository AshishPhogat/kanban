import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { GOContext } from '../../Context/GoContext';

//components
import UserCard from '../../components/usercard';

function User() {

    const [tasks,setTasks] = useState([]);
    const [users,setUsers] = useState([]);

    const {go} = useContext(GOContext);
    useEffect(()=>{
        const loadData = async()=>{
            const res = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
            setTasks(res.data.tickets)
            setUsers(res.data.users)
        }
        loadData();
    },[])

  return (
    <>
        <div className='flex  gap-2 h-screen bg-gray-200 p-5' >
        {
            users.map((user)=>{
                const mytasks = tasks.filter((task)=>{
                    return task.userId===user.id;
                });
                if(mytasks.length==0) return null;
                if(go.Order=="title"){
                    mytasks.sort((a,b)=>{
                        if(b.title > a.title) return -1;
                        else if(b.title < a.title) return 1;
                        return 0;
                    })
                }else if(go.Order=="priority"){
                    mytasks.sort((a,b)=>{
                        if(b.priority > a.priority) return -1;
                        else if(b.priority < a.priority) return 1;
                        return 0;
                    })
                }
                return <UserCard key={user.id} username={user.name} task={mytasks}/>;
            })

            // <UserCard username="Ashish" task={[{title:"Do it",id:"Cam-demo",status:"Todo",tag:["Feature Request"]}]}/>
        }
        </div>
    </>
  )
}

export default User;