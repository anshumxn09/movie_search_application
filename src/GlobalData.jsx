import React, { useEffect } from "react";
import { useState } from "react";
const AppContext = React.createContext();

const API_URL = 'http://www.omdbapi.com/?apikey=5e059dd4&';

const GlobalData = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState({
        show : 'false',
        message : ''
    })
    const [moveName, setMoveName] = useState('titanic')
    const getMovies = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if(data.Response === 'True'){
                setLoading(!isLoading);
                setMovies(data.Search);
            }
        } catch (error) {
            setError({
                show : 'true',
                message : error
            })
        }
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            getMovies(`${API_URL}s=${moveName}`);
        }, 800)

        return () => clearTimeout(timer)
    }, [moveName])

    return <AppContext.Provider value={{isLoading, isError, movies, moveName,setMoveName}}>   {children} 
    </AppContext.Provider>
}

export {AppContext, GlobalData};
