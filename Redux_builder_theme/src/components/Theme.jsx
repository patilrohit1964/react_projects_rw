import React from 'react'
import { ToggleDark, ToggleLight } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const Theme = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector(store => store.ThemeReducer);

    return (
        <div>
            <button onClick={() => ToggleLight(dispatch)} disabled={theme === 'light'}>Switch To Light</button>
            <button onClick={() => ToggleDark(dispatch)} disabled={theme === 'dark'}>Switch To Dark</button>
        </div>
    )
}

export default Theme;