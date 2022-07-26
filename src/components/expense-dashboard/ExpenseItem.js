import React from 'react'
import { Link } from 'react-router-dom'


export default (props) => {
  const {id, description, amount, createdAt} = props.expense
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
      <p>{amount} - {createdAt}</p>
  </div>
  )
}