import { createContext, useEffect, useState } from "react" 

export const AdminContext = createContext(null); 

const findLogInFromSessionStorage = () => {
    const getStorage = sessionStorage.getItem("login"); 
    
    if(getStorage===null) {
       return null
       }else {
       //parse my stringify object 
       return JSON.parse(getStorage)
    }
}

export const AdminProvider = ({children}) => {
    const [admin, setAdmin] = useState(findLogInFromSessionStorage());
    console.log(admin)
    useEffect(()=> {
        sessionStorage.setItem("login", JSON.stringify(admin))
    }, [admin])

return (
    <AdminContext.Provider value={{admin, setAdmin}}>

{children}

    </AdminContext.Provider>
)


};

