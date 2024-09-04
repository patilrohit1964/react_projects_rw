import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../redux/action';
import Loading from './Loading';
import ReqError from './ReqError';

const Products = () => {

  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(1);
  const { data, theme, isLoading, isError } = useSelector((store) => store.ProductReducer);
  
  // json parameter object
  const paramObject = {
    params: {
      _page: page,
      _limit: 10,
      _sort: 'price',
      _order: order,
      q: search,
      category: category,
    },
  };


  const dispatch = useDispatch();

  async function DeleteProduct(productId) {
    const deleteResponse = await axios.delete(`http://localhost:4500/Products/${productId}`);
    if (deleteResponse) {
      alert('Product Deleted Successfully');
      dispatch(getData(paramObject));
    }
  }


  useEffect(() => {
    dispatch(getData(paramObject));
  }, [page, order, search, category])

  return isLoading ? <Loading /> : isError ? <ReqError /> : (


    <>
      <div className='m-8 flex items-center justify-around'>
        <select className="select select-info w-full max-w-xs" onChange={(e) => setCategory(e.target.value)}>
          <option value={null}>Sorted By Category</option>
          <option value={"men's clothing"}>Men's Clothing</option>
          <option value={'jewelery'}>Jewelery</option>
          <option value={'electronics'}>Electronics</option>
          <option value={"women's clothing"}>Women's Clothing</option>
        </select>

        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Products Here..."
          className="input input-bordered input-info w-full max-w-xs" />

        <select className="select select-info w-full max-w-xs" onChange={(e) => setOrder(e.target.value)}>
          <option value={null}>Sorted By Price</option>
          <option value={'asc'}>Low To High</option>
          <option value={'desc'}>High To Low</option>
        </select>

      </div>


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
              <p className='pb-3 text-3xl'>&#8377; {el.price}</p>
              <div className="card-actions">
                <Link to={`/editpr/${el.id}`}><button className="btn btn-primary">Edit</button></Link>
                <button className="btn btn-primary" onClick={() => DeleteProduct(el.id)}>Delete</button>
              </div>
            </div>
          </div>
        )) :
          <h1 className='text-3xl'>Products Not Found</h1>
        }
      </div>

      <div className="flex justify-around items-center p-3 w-96 m-auto">
        <button className="join-item btn btn-outline w-32" onClick={(e) => setPage(prev => prev - 1)} disabled={page === 1}>Previous page</button>
        {data.length > 0 ?
          <>
            <h5 className='text-2xl'>{page}</h5>
            <button className="join-item btn btn-outline w-32" onClick={(e) => setPage(prev => prev + 1)} disabled={data.length < 1}>Next</button>
          </>
          : null
        }
      </div>
    </>
  )
}

export default Products