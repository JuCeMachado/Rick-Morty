import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CardListItem from '../components/CardListItem';


const Card = () => {
  const { character } = useLoaderData();
  console.log(character);

  return (
    <div className='container-fluid row justify-content-center'>
        <div className="card" style={{ width: `19rem`, marginTop: `80px`}}>
            <img src={character.image} alt="..." className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title text-primary">{character.name}</h5>
                <p>
                  <span className='fw-bold'>Estado: </span>{character.status}
                </p>
                <p>
                  <span className='fw-bold'>Genero: </span>{character.location.name}
                </p>
                <p>
                  <span className='fw-bold'>Origen: </span>{character.origin.name}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card
