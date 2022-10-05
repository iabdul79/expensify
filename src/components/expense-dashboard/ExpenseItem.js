import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


export default (props) => {
  const {id, description, amount, createdAt} = props.expense
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
      <p>
        {numeral(amount).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
  </div>
  )
}