import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRequest, getResponse, reqFailed } from '../redux/ActionType';
import axios from 'axios';
import { getData } from '../redux/action';
import Loading from './Loading';
import ReqError from './ReqError';
import { Link } from 'react-router-dom';

const Products = () => {
  const { data, theme } = useSelector((store) => store.ProductReducer);
  // const [page, setPage] = useState(1);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getData);
  }, [])

  return (

    <>

      <div className='flex flex-wrap justify-around mt-' style={{ backgroundColor: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black' }}>
        {data.length > 0 ? data.map((el, index) => (
          <div className="card bg-base-100 mb-3 w-96 shadow-xl" key={el.id} style={{ backgroundColor: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black', boxShadow: theme === 'light' ? "2px 2px 2px #fff" : null }}>
            <Link to={`/description/${el.id}`}>
              <figure className='px-10 pt-10 h-52'>
                <img
                  className='h-full w-full'
                  src={el.image}
                  alt={el.description} />
              </figure>
            </Link>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{el.title}</h2>
              <p>{el.description.substring(1, 120)}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )) :
          <h1>Products Not Found</h1>
        }
      </div>

      {/* <div className="join w-full items-center justify-center p-4">
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" onClick={() => setPage(1)} defaultChecked />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" onClick={() => setPage(2)} />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" onClick={() => setPage(3)} />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" onClick={() => setPage(4)} />
      </div> */}
    </>
  )
}

export default Products