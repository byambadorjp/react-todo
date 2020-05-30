import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='center'>
            <h1>NAVIGATION BAR MENU.</h1>

            {children}

            <h1> CREATED BY NEST ACADEMY. 2020</h1>
        </div>
    )
}

export default Layout;