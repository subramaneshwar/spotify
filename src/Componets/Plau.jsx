import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
function Plau() {
  const { playlist } = useSelector((state) => state)
  let { id } = useParams()
  console.log(id)
  console.log(playlist)
  let val = playlist.playlists.items.filter((ele, index) => {
    console.log(index == id)
    return index == id;
  }

  )
  console.log(val)
  return (
    <div className='h-100' style={{ marginLeft: "180px", paddingTop: "50px" }}>
      <Container fluid className='bg-dark'>
        <div className='d-flex p-5'>
          <div className="card" style={{ width: "200px", height: "200px" }}>
            <img src={val[0].data.images.items[0].sources[0].url} alt="" style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="px-3 ">
            <p className='text-info'>playlist</p>
            <p className='text-info fs-1'>{val[0].data.name}</p>
            <p className='text-info'>{val[0].data.description}</p>
          </div>
        </div>
        <div>
          <i class="bi bi-play-circle-fill text-success fs-1 px-3"></i>
          <i class="bi bi-heart-fill text-warning fs-1 px-3"></i>
          <i class="bi bi-three-dots text-light fs-1"></i>
        </div>
        <div className='d-flex justify-content-between gap-5'>

          <div className="title text-info flex-wrap">
            <p className='text-danger-emphasis'>Title</p>
            {
              playlist.tracks.items.map((ele) => (

                <>
                  <p>{ele.data.albumOfTrack.name}</p>

                </>


              ))
            }

          </div>
          <div className="album text-info ">
            <p className='text-danger-emphasis'>Alubms</p>
            {
              playlist.tracks.items.map((ele) => (

                <>
                  <p>{ele.data.name}</p>

                </>


              ))
            }
          </div>
          <div className="artist text-info">
            <p className='text-danger-emphasis'>Artist</p>
            {
              playlist.tracks.items.map((ele) => (

                <>
                  <p>{ele.data.artists.items[0].profile.name}</p>

                </>


              ))
            }
          </div>
          <div className="duration text-info">
            <p className='text-danger-emphasis'>
            Duration in millsec
            </p>
            {
              playlist.tracks.items.map((ele) => (

                <>
                  <p>{ele.data.duration.totalMilliseconds}</p>

                </>


              ))
            }

          </div>

        </div>

      </Container>
    </div>
  )
}

export default Plau