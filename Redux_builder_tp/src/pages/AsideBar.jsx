import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const AsideBar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] = useState(searchParams.getAll('category') || []);

    const handleChange = (event) => {
        let { value } = event.target;
        if (category.includes(value)) {
            setCategory((prev) => prev.filter(item => item !== value));
        }
        else {
            setCategory(prev => [...prev, value]);
        }
    }

    useEffect(() => {
        setSearchParams({ category });
    }, [category]);

    return (
        <aside className='w-[20%] fixed top-218 border h-screen shadow-sm shadow-gra-500/50 p-10'>
            <h2 className='text-2xl'>Categories</h2>
            <div className="form-control mt-5">
                <label className="label cursor-pointer">
                    <span className="label-text text-xl">Men</span>
                    <input type="checkbox" checked={category.includes("men's clothing")} onChange={handleChange} value={"men's clothing"} className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="form-control mt-5">
                <label className="label cursor-pointer">
                    <span className="label-text text-xl">Women</span>
                    <input type="checkbox" checked={category.includes("women's clothing")} onChange={handleChange} value={"women's clothing"} className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="form-control mt-5">
                <label className="label cursor-pointer">
                    <span className="label-text text-xl">Jewelery</span>
                    <input type="checkbox" checked={category.includes("jewelery")} onChange={handleChange} value={"jewelery"} className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="form-control mt-5">
                <label className="label cursor-pointer">
                    <span className="label-text text-xl">Electronics</span>
                    <input type="checkbox" checked={category.includes("electronics")} onChange={handleChange} value={"electronics"} className="checkbox checkbox-primary" />
                </label>
            </div>
        </aside>
    )
}

export default AsideBar;