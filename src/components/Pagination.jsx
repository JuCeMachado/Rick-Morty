import React from 'react'

const Pagination = ({onPrev, onNext }) => {
  return (
    <nav>
        <ul className="pagination justify-content-center mt-4">
            <button className="btn btn-warning" onClick={onPrev}>
              Anterior</button>
            <button className="btn btn-primary ms-2" onClick={onNext}>Siguiente</button>
        </ul>
    </nav>
  )
}

export default Pagination
