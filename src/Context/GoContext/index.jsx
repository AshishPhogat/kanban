import React,{useState} from 'react'

export const GOContext= React.createContext();


function GoContextProvider(props) {

    const [go,Setgo] = useState({
        Group: "user",
        Order: "priority",
    });

  return (
    <>
        <GOContext.Provider value={{go,Setgo}} >
            {props.children}
        </GOContext.Provider>
    </>
  );
}



export default GoContextProvider;