import React from 'react'
import { Link } from "react-router-dom"
function Nav(){
    return(
        <>
        <div className='navbar'>
            <div className='home'>
                <Link to="/">Home</Link>
            </div>

            <div className='error'>
                <Link to="/ErrorBoundaryTest">Error</Link>
            </div>

            <div className='notfound'>
                <Link to="/NotFound">404</Link>
            </div>
        </div>
        </>
    )
}

export default Nav;