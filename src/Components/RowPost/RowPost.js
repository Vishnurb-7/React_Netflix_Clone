import React, {useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from '../../Constants/constant'
import axios from '../../axios'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlid] = useState('')
  useEffect(() =>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      alert("network error")
    })
  },[]) 
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const HandleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
       if(response.data.results.length!==0){
         setUrlid(response.data.results[0])
       }else{
         console.log('array empty');
       }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
           <img onClick={()=>HandleMovie(obj.id)} className={props.isSamll ? 'smallPoster': 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
        )}
  
      </div>
     { urlId &&  <YouTube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default RowPost
