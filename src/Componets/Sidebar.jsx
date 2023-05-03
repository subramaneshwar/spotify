import React, { useContext } from 'react';
import { Container, Nav, NavLink, Offcanvas } from 'react-bootstrap';
import { UserContext } from './Usecontex';
import { BiLibrary } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Topnav from './Topnav';

const Sidebar = () => {
  
  const { show, handleClose,searc, setsearc } = useContext(UserContext)
  return (
    <div className='d-flex'  > 
      <Topnav/>
      <div className='bg-dark d-sm-none d-md-block position-fixed z-3 position-absolute' >
        <Offcanvas show={show} onHide={handleClose} className="bg-dark vw-25" responsive="lg" >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" width="100" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body  >
            <div className='d-flex text-light '>
              <Nav defaultActiveKey="" className="flex-column vh-100 justify-content-between">
                <div>
                <Nav.Link as={Link} to="/" className='d-none d-sm-none d-lg-block'><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" width="150" className='py-3 ' /></Nav.Link>
                <Nav.Link as={Link} to="home" > <i className="bi bi-house"></i> Home</Nav.Link>
                <Nav.Link as={Link} to="search" onClick={()=>setsearc(!searc)} ><i className="bi bi-search"></i> Search</Nav.Link>
                <Nav.Link as={Link} to="/" > <BiLibrary /> Your Library</Nav.Link>
                <div className='pt-5'>
                  <NavLink as={Link} to=""><i class="bi bi-plus-square-fill"></i> Create Playlist</NavLink>
                  <NavLink as={Link} to=""> <i class="bi bi-heart-fill"></i> LikedSong</NavLink>
                </div>
                <div>
                </div>
                </div>
                <Container className='text-light'>
                  <p>legal privacy center </p>
                  <p>privacy Policy Cookies</p>
                  <p>About Ads</p>
                  <p>Cookies</p>
                </Container>
              </Nav>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div >
      
    </div >
  );
};

export default Sidebar;
