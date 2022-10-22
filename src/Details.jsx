import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams();
  return (
    <div>Hello World {id}</div>
  )
}

export default Details