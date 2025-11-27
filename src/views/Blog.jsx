import { useEffect } from 'react'
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import Card from '../components/CardListItem'
import CardListItem from '../components/CardListItem';

  

const Blog = () => {
  const { characters } = useLoaderData();

  const [ searchParams, setSearchParams ]= useSearchParams();

  useEffect(() => {
     console.log(searchParams.get('character'));
  }, [searchParams]);

  const handleChange = (e) => {
    setSearchParams({ character: e.target.value });
  }


  return (
    <div className="container mt-2">
      {/* Buscador */}
      <div className="position-relative mb-2">
          <i className="bi bi-search position-absolute top-50 translate-middle-y ms-2"></i>
          <input
            className="form-control ps-5"
            type="text"
            onChange={handleChange}
            value={searchParams.get('character') ? searchParams.get('character') : ""}
            placeholder="Buscar personaje..."/>
      </div>

        <div className='row'>
            {/* 20 personajes */}
            {characters
              .filter((item) =>{
                let filter = searchParams.get('character');
                let name = item.name.toLowerCase();

                if(!filter) return true;
                  return name.startsWith(filter.toLowerCase());
              })
              .map((item) => (
                    <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
                      <CardListItem item={item} />
                    </div>
              ))}
        </div>
    </div>
  );
};

export default Blog
