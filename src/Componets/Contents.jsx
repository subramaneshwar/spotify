import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from './Usecontex';

function Contents() {
  const {inp} = useContext(UserContext)
  console.log(inp,"skskksaaaaaaaaaaaaa")
  useEffect(() => {
    handle(inp)
  },[])
  let dispatch = useDispatch()
  const { prop } = useSelector((state) => state)
  // const { playlist } = useSelector((state) => state)
  // const { India } = useSelector((state) => state)
  // console.log(India,"india")
  async function handle(query) {
    // const [query, setquery] = useState("trending")
    const url = `https://spotify23.p.rapidapi.com/search/?q=${"india"}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bad4bce3e8msha9e03926912edf8p1d3991jsn271e58dadc13',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    const resp = await fetch(url, options)
    const data = await resp.json()
    console.log(data, "sacasc", query);
    dispatch({
      datas: data,
      type: "props"
    })
  }
    
  return (
    <div className='h-100' style={{marginLeft:"0px",paddingTop:"0px"}}>
    <div className='d-flex flex-row flex-wrap'> 
      <Container fluid className='bg-dark '>
        <Container  className='d-flex justify-content-between px-3 pt-2'>
        <p className='text-white fw-bold fs-5 '>{inp}</p>
        <p className='text-white-50'>view details</p>
        </Container >
        <div fluid className='d-flex gap-2'>
          
          {Object.keys(prop).length === 0 ? "please wait " : prop.albums.items.map((ele, ind) => (
            ind < 4 ? "" :
              <Container  fluid >
                <Link to={""} className='bg-dark d-flex flex-column text-light p-2 shadow-lg border border-dark-subtle rounded'>
                <img src={ele.data.coverArt.sources[1].url} alt="" />
                <small className='fw-bold'>{ele.data.name}</small>
                <div></div>
                </Link>
              </Container>
          ))}
        </div>
      </Container>
      <Container fluid className='bg-dark'>
        <div className='d-flex justify-content-between px-3 pt-2'>
        <p className='text-white fw-bold fs-5'>Playlist</p>
        <p className='text-white-50'>view details</p>
        </div>
        <div fluid className='d-flex gap-2'>
          {Object.keys(prop).length === 0 ? "please wait " : prop.albums.items.map((ele, ind) => (
            ind < 5 ? "" :
              <Container fluid className='bg-dark d-flex flex-column text-light p-2  rounded'>
                <Link to="" className='bg-dark d-flex flex-column text-light p-2 shadow-lg border border-dark-subtle rounded'>
                <img src={ele.data.coverArt.sources[1].url} alt="" />
                <small className='fw-bold'>{ele.data.name}</small>
                <div></div>
                </Link>
              </Container>
          ))}
        </div>
      </Container>
      <Container fluid className='bg-dark'>
        <div className='d-flex justify-content-between px-3 pt-2'>
        <p className='text-white fw-bold fs-5'>Playlist</p>
        <p className='text-white-50'>view details</p>
        </div>
        <div fluid className='d-flex gap-2'>
          {Object.keys(prop).length === 0 ? "please wait " : prop.albums.items.map((ele, ind) => (
            ind < 2 ? "" :
              <Container fluid className='bg-dark d-flex flex-column text-light p-2  rounded'>
                <Link to="" className='bg-dark d-flex flex-column text-light p-2 shadow-lg border border-dark-subtle rounded'>
                <img src={ele.data.coverArt.sources[1].url} alt="" />
                <small className='fw-bold'>{ele.data.name}</small>
                <div></div>
                </Link>
              </Container>
          ))}
        </div>
      </Container>
    </div>
    </div>
  )
}

export default Contents