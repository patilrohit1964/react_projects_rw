import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
const Product = () => {
    const [data, setData] = useState([])
    const navigate=useNavigate()
    function FetchData() {
        axios.get(' http://localhost:3000/products').then(e => setData(e.data)).catch(e => console.log(e))
    }

    useEffect(() => {
        FetchData();
        // cleanup function
        return () => {
            // cleanup code
            return false
        }
    }, []) 
    return (
        <div>
            <button onClick={() => {
                localStorage.removeItem('token');
                navigate('/login')
            }} className='d-block m-auto mt-2'>LogOut</button>
            <div className='d-flex flex-wrap justify-content-around mt-3'>
                {data.map((e) => (
                    <Card style={{ width: '18rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} key={e.id} className='mb-3'>
                        <Card.Img variant="top" src={e.image} className='h-50 ' />
                        <Card.Body>
                            <Card.Title>{e.title}</Card.Title>
                            <Card.Text>
                                {e.description.substring(0, 100)}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Product