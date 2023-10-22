import React from 'react';
import Nav from './Nav.jsx';
import useCustomCounter from './useCustomCounter';
import './Counter.css';


function Counter() {
    const {count, increment, decrement, reset, setValue} = useCustomCounter();

    return (
        <>
        <Nav/>
        <div className='card'>
            <h1>Counter app</h1>
            <p>{count}</p>
            <div className='btn'> 
            <button className='btn-block'  id='Increment' onClick={increment}>Increment</button>&nbsp;
            <button className='btn-block' id='Decrement' onClick={decrement}>Decrement</button>&nbsp;
            <button className='btn-block' id='Reset' onClick={reset}>Reset</button>&nbsp;
            <button className='btn-block' id='Set' onClick={setValue}>Set</button>&nbsp;
            </div>
        </div>
        </>
    );
}

export default Counter;
