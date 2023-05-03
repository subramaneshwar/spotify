import { createContext, useState } from "react";

export const UserContext = createContext()
const CustomProvider = ({children})=>{
  const [show, setShow] = useState(false);
  const [searc, setsearc] = useState(false);
  const [inp, setinp] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Display, setDisplay] = useState(false)


    return(
    
        <UserContext.Provider value={{show,setShow,handleShow,handleClose,searc, setsearc,inp, setinp,Display, setDisplay}}>
            {children}
        </UserContext.Provider>
    )
}
export default CustomProvider