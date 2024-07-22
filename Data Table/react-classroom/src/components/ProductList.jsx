import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const ProductList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sorting, setSort] = useState('low');
  useMemo(()=>{
    sortingProducts();
  },[sorting]);
  // fetch from json server
  function DataFetch() {
    axios.get(`http://localhost:8000/products?_page=${page}&_limit=5
`).then(e => setData(e.data)).catch(e => console.log(e));
  }
  // sorting function
  function sortingProducts(e) {
    if(e.target.value=='low'){
      let sortedByLow=data.sort((a,b)=>a.price - b.price);
      setSort(sortedByLow)
      console.log("low sorted done");
    }else{console.log('high')}
  }
  useEffect(() => {
    DataFetch();
  }, [page]);
  return (
    <div>
      <Form.Select aria-label="Default select example" className='w-25 mt-2' onChange={sortingProducts}>
        <option>Sorting By</option>
        <option value="low">low to high</option>
        <option value="high">high to low</option>
        {/* <option value="3">Three</option> */}
      </Form.Select>
      <div className='d-flex flex-wrap justify-content-around'>
        {data.length>0 ? data.map((e,index) => (
          <Card style={{ width: '20rem' }} className='mb-2 mt-4 text-center' key={e.id}>
            {index+1}
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
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        )): <h1>No Products available here...</h1>}
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