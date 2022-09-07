const db = require('../db')
const Pics = require('../models/pics')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Pics.collection.drop()
  const pics = [
    {
      title: '1',
      decription: '',
      image: '',
      id: ''
    },
    {
      title: '2',
      decription: '',
      image: '',
      id: ''
    },
    {
      title: '3',
      decription: '',
      image: '',
      id: ''
    },
    {
      title: '4',
      decription: '',
      image: '',
      id: ''
    },
    {
      title: '5',
      decription: '',
      image: '',
      id: ''
    },
    {
      title: '6',
      decription: '',
      image: '',
      id: ''
    }
  ]
}
