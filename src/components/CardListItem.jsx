import React from 'react'
import { Link } from 'react-router-dom'
import '../components/CardListItem.css'


const CardListItem = ({ item }) => {
  return (
    <div className="rick-card m-2" style={{ width: "16rem" }}>
      <img src={item.image} alt={item.name} />
      <div className="card-body">
          <h5 className="rick-title text-primary">{item.name}</h5>
          <hr />
          <p className='text-secondary'>
            <span className='fw-bold text-secondary'>Especie: </span>{item.species}
          </p>
           <p className='text-secondary'>
            <span className='fw-bold text-secondary'>Género: </span>{item.gender}
          </p>
        <Link className="portal-btn mt-2 d-inline-block" to={`/blog/${item.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default CardListItem
