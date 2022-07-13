import React from 'react'

export default (props) => {
  const {description, amount, createdAt} = props.expense;
  return (
    <div>
      <h2>{description}</h2>
      <p>{amount} - {createdAt}</p>
  </div>
  )
}