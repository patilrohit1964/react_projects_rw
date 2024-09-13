import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Description = () => {
    const { data, theme } = useSelector((store) => store.ProductReducer);

    const { id } = useParams();


    let { title, price, description, category, image, id: productId } = data.find(item => item.id == id);


    return (
        <div className='h-screen flex items-center justify-center' style={{ backgroundColor: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black' }}>
            <div className="card lg:card-side bg-base-100 shadow-xl" style={{ backgroundColor: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black', boxShadow: theme === 'light' ? "2px -3px 5px #fff,2px 3px 5px #fff" : null }}>
                <figure>
                    <img
                        src={image}
                        className='h-96 w-96'
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title w-80">{title}({category})</h2>
                    <p className='w-80'>{description}</p>
                    <h5 className='w-80 text-3xl'>&#8377; {price}</h5>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description