import React,{useState,useEffect} from 'react'

export const GOContext= React.createContext();


function GoContextProvider(props) {

  function getInitialState() {
    const notes = localStorage.getItem('go_state')
    return notes ? JSON.parse(notes) : {Group: "user" , Order : "priority"}
  }
  

  let [go,Setgo] = useState(getInitialState);


    useEffect(()=>{
        window.localStorage.setItem('go_state',JSON.stringify(go));
    },[go])

  return (
    <>
        <GOContext.Provider value={{go,Setgo}} >
            {props.children}
        </GOContext.Provider>
    </>
  );
}



export default GoContextProvider;