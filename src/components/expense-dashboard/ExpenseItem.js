import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


export default (props) => {
  const {id, description, amount, createdAt} = props.expense
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h2 className="list-item__title">{description}</h2>
        <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className="list-item__data">
        {numeral(amount).format('$0,0.00')}
      </h3>
    </Link>
  )
}