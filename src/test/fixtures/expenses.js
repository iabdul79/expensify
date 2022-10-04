import moment from 'moment'

export default [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 120,
    createdAt: moment(0).valueOf(),
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 120300,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 12100,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
]