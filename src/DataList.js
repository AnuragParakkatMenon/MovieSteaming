import React, { useEffect } from 'react'

const DataList = () => {

    //useTopRated Later
    
    const url = 'https://api.themoviedb.org/3/movie/top_rated';
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDIzNDI0YzQ5ZDFjNDRjZmEyMGM4ZDIyYjAxN2FjMiIsIm5iZiI6MTc1Nzk1ODAwNi42MTYsInN1YiI6IjY4Yzg0Zjc2OGUyNzQwZTJlMzIzMTFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zxuzN8S5ELnBZuUqumguhdqQbqz4BS1b2MNNv-6diYM'
  }
};
    const fetchNowPlaying= async()=>{
        const data = await fetch(url,options)
        const json = await data.json()
        console.log(json.results)
    } 
    useEffect(()=>{fetchNowPlaying()},[])



  return (
    <div>DataList</div>
  )
}

export default DataList