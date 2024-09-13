import React from 'react'
import { useSelector } from 'react-redux';
import Theme from './Theme';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';

const Counter = () => {
    const { theme } = useSelector(store => store.ThemeReducer);
    return (
        <div className='counter' style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
            <Theme />
            <CounterValue />
            <CounterButtons />
        </div>
    )
}

export default Counter