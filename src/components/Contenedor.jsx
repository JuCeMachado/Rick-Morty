import React from 'react'
import Card from './Card'

const Contenedor = ({ characters }) => {
  return (
    <div className='container mt-4'>
        <div className='row'>
        {characters.map((item) => (
            <Card  key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default Contenedor
