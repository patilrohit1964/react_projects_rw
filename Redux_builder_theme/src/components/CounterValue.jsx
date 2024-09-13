import React from 'react'
import { useSelector } from 'react-redux';

const CounterValue = () => {

    const { count } = useSelector((store) => store.CounterReducer);

    return (
        <div>
            <h1>Counter:{count}</h1>
        </div>
    )
}

export default CounterValue