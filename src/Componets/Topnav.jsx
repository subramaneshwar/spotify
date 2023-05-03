import React, { useContext, useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { UserContext } from './Usecontex'
import { GrPrevious, GrNext } from 'react-icons/gr'

function Topnav() {
  const { handleShow,searc,inp, setinp,setDisplay,Display} = useContext(UserContext)
  const [Data, setData] = useState("")
  
  return (
    <div className=' w-100 position-fixed'>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container className='d-flex d-sm-flex'>
          <button className=' d-sm-block d-lg-none btn btn-info btn-lg' onClick={handleShow}>
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <div className='text-light ' style={{marginLeft:"10%"}}>
            <i className="bi bi-caret-left fs-5"></i>
            <i className="bi bi-caret-right fs-5"></i>
          </div>
          <div className={searc ?"visible" :" invisible"}>
            <input type="text" style={{width:"300px",height:"30px",borderRadius:"20px",paddingLeft:"10px"}} onChange={(e)=>{setData(e.target.value)}} />
            <button style={{width:"70px",height:"30px",borderRadius:"10px"}} onClick={()=>{console.log("hii");setinp(Data);setDisplay(true)}}>search</button>
          </div>
          <div className='d-flex gap-2'>
            <Button >sign up</Button>
            <Button >Login</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topnav