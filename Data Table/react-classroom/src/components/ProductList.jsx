import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const ProductList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sorting, setSort] = useState(null);
  const [ascdesc, setOrder] = useState(null);
  const [search, setSearch] = useState('');
  const navigate=useNavigate();
  // fetch from json server
  function DataFetch() {
    axios.get(`http://localhost:8000/products`, {
      params: {
        _page: page,
        _limit: 5,
        category: sorting,
        _sort: 'price',
        _order: ascdesc, // to sort in ascending order
        q: search
      }
    }).then(e => setData(e.data)).catch(e => console.log(e));
  }
  // delete function
  function deleteProduct(id) {
    axios.delete(`http://localhost:8000/products/${id}`, {
      params: {
        id: id
      }
    }).then(e => {
      if (e.status == 200) {
        alert("Data delete succefully");
        setPage(1);
      }
    });
    DataFetch(); // refresh data after deletion
  }
  useEffect(() => {
    DataFetch();
  }, [page, sorting, ascdesc, search]);
  
  // function logout
  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div>
      <button className='btn btn-secondary m-auto d-block mt-2' onClick={logout}>Logout</button>
      <div className='d-flex align-items-center justify-content-around mt-2'>
        <Form.Select aria-label="Default select example" className='w-25 mt-2' onChange={(e) => setSort(e.target.value)}>
          <option>Sorting By</option>
          <option value="men's clothing">Men wearing</option>
          <option value="women's clothing">women wearing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </Form.Select>
        <input type="text" placeholder='search by' className='pe-2 ps-2' onChange={(e) => setSearch(e.target.value)} />
        <button className='btn btn-secondary' onClick={(e) => setOrder('asc')}>Low to High</button>
        <button className='btn btn-secondary' onClick={(e) => setOrder('desc')}>High to Low</button>
      </div>
      <div className='d-flex flex-wrap justify-content-around'>
        {data.length > 0 ? data.map((e, index) => (
          <Card style={{ width: '20rem' }} className='mb-2 mt-4 text-center' key={e.id}>
            {index + 1}
            <Card.Img variant="top" src={e.image} height={300} width={300} className='object-fit-cover' />
            <Card.Body>
              <Card.Title>{e.title}</Card.Title>
              <Card.Title>
                {e.category}
              </Card.Title>
              <Card.Title>
                ${e.price}
              </Card.Title>
              <Card.Text>
                {e.description.substring(0, 100)}
              </Card.Text>
              <Button variant="primary me-3"><Link to={`/editProduct/${e.id}`}>Edit</Link></Button>
              <Button variant="danger" onClick={() => deleteProduct(e.id)}>Delete</Button>
            </Card.Body>
          </Card>
        )) : <h1>No Products available here...</h1>}
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <button className='btn btn-secondary' onClick={(e) => setPage(page - 1)} disabled={page == 1}>Prev</button>
        {page}
        <button className='btn btn-secondary' onClick={(e) => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export default ProductList