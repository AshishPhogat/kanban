import React, { useEffect, useState ,useContext} from 'react'
import axios from 'axios';
import { GOContext } from '../../Context/GoContext';
//components
import UserCard from '../../components/usercard';

function Priority() {

    const [tasks,setTasks] = useState([]);
    const [users,setUsers] = useState([]);
    const priority = [0,4,3,2,1];
    const check = {
        0: "No priority",
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
    };
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
            priority.map((p)=>{
                const mytasks = tasks.filter((task)=>{
                    return task.priority==p;
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
                return <UserCard username={check[p]} task={mytasks}/>;
            })

            // <UserCard username="Ashish" task={[{title:"Do it",id:"Cam-demo",status:"Todo",tag:["Feature Request"]}]}/>
        }
        </div>
    </>
  )
}

export default Priority;