import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
const Product = () => {
    const [data, setData] = useState([]);

    async function fetchreqres() {
        let data = await axios('https://fakestoreapi.com/products');
        setData(data.data);
    }
    useEffect(() => {
        fetchreqres();
    }, []);
    return (
        <div>
            <h1 className='text-center pt-5'>Products</h1>
            <div className='d-flex flex-wrap justify-content-around mt-5'>
                {data.map((el, index) => (
                    <Card style={{ width: '18rem' }} key={el.id} className='mb-3'>
                        <Card.Img variant="top" src={el.image} className='h-100 w-100' />
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Title>{el.price}</Card.Title>
                            <Card.Text>
                                {el.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Product