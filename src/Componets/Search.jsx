import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { UserContext } from './Usecontex';
import Content from './Content';
import Contents from './Contents';

function Search() {
  let dispatch = useDispatch()
  const {inp,Display, setDisplay} = useContext(UserContext)
  
  // useEffect(() => {
  //   const url = `https://spotify23.p.rapidapi.com/search/?q=${inp}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '5783b6bbe5msh8e31c2789f93126p1fad94jsn3b79943699ce',
  //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  //     }
  //   };
  //   async function fetchmy() {
  //     const resp = await fetch(url, options);
  //     const data = await resp.json()
  //     dispatch({
  //       datas: data,
  //       type: "search"
  //     })
  //     setDisplay(!Display)
  //   }
  //   fetchmy();
  // }, [])

  const array = ["telugu", "pops", "madeforyou", "charts", "newrelease", "events", "bollywood", "hindi", "English", "tamil","telugu", "pops", "madeforyou", "charts", "newrelease", "events", "bollywood", "hindi", "English", "tamil"]
  return (
    
    <div className='h-100' style={{ marginLeft: "190px", paddingTop: "50px" }}>
      {
        Display ? <Contents/> : <>
        <h1>Browse all</h1>
      <div className='d-flex gap-5 flex-wrap'>
        {
          array.map(ele => 
            (
              <Link to="/home">
      
              <div style={{ border: "solid 2px", width: "200px", height: "200px", backgroundColor: "violet" ,borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                
              <p className='fw-bold text-dark'>{ele}</p>
              
              </div>
              
              </Link>
            )
          )
        }
      </div>

        </>
      }
      

    </div>
  )
}

export default Search