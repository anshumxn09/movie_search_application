import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Details = () => {
    const {id} = useParams();
    const API_URL = 'http://www.omdbapi.com/?apikey=5e059dd4&';
    const [movies, setMovies] = useState({});
    const [isLoading, setLoading] = useState(true);
    const getMovies = async (url) => {
      setLoading(true);
        try {
            const response = await fetch(url);  
            const data = await response.json();
            console.log(data);
            if(data.Title){
              setMovies(data);
            }else{
              setMovies({})
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            getMovies(`${API_URL}i=${id}`);
        }, 800)

        return () => clearTimeout(timer)
    }, [id])

    if(isLoading){
      return <h1 className='loading'>LOADING...</h1>
    }

    if(!movies.Title){
      return <h1 className='loading'>NOT FOUND</h1>
    }
  return (
    <>
    <div className='detailsBox'>
        <h1>{movies.Title}</h1>
        <div className="detailsCard">
            <div className="images">
              <img src={movies.Poster} alt="" />
            </div>
            <div className="content">
              <h2>Actors:</h2>
              <h3>{movies.Actors}</h3>
              <h2>Director:</h2>
              <h3>{movies.Director}</h3>
              <h2>Genre</h2>
              <h3>{movies.Genre}</h3>
              <h2>Writer</h2>
              <h3>{movies.Writer}</h3>
              <h2>Released</h2>
              <h3>{movies.Released}</h3>
              <div className="link">
              <Link to={'/'}>BACK</Link>
              </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Details